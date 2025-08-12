import { HttpStatus } from '@nestjs/common';

export class ApiResponse<T> {
    private constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly data: T,
    ) { }

    public static success<T>(data: T, message: string = 'Success'): ApiResponse<T> {
        return new ApiResponse(HttpStatus.OK, message, data);
    }

    public static created<T>(data: T, message: string = 'Created'): ApiResponse<T> {
        return new ApiResponse(HttpStatus.CREATED, message, data);
    }

    public static error(message: string, statusCode: number = HttpStatus.BAD_REQUEST): ApiResponse<null> {
        return new ApiResponse(statusCode, message, null);
    }
    public static response<T>(statusCode, message: string, data: T): ApiResponse<T> {
        return new ApiResponse(statusCode, message, data);
    }
}