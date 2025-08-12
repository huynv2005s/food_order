import { IsOptional, IsNumberString } from 'class-validator';
export class PaginationDto {
    @IsOptional()
    @IsNumberString()
    readonly page?: string = '1';

    @IsOptional()
    @IsNumberString()
    readonly limit?: string = '10';
}