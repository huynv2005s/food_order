import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    prod_name: string;

    @IsString()
    prod_description: string;

    @IsString()
    category_id: string;

    @IsNumber()
    prod_price: number;

}