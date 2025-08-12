import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../bases/api-response';

export interface Response<T> {
    data: T;
    message: string;
    statusCode: number;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
        return next.handle().pipe(
            map(data => {
                if (data instanceof ApiResponse) {
                    return data;
                }

                const statusCode = context.switchToHttp().getResponse().statusCode;
                return ApiResponse.response(statusCode, 'Success', data);
            }),
        );
    }
}