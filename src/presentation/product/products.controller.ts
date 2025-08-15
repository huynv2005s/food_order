import { Controller, Post, Body, Get, Inject } from '@nestjs/common';
import { CreateProductUseCase } from 'src/use-case/product/create.product.usecase';
import { CreateProductDto } from './dto/create-product.dto';
import { Public } from 'src/shared/decorators/customize';
import { FindAllProductUseCase } from 'src/use-case/product/find-all-product.usecase';
@Public()
@Controller('products')
export class ProductController {
    constructor(
        private readonly createFoodUseCase: CreateProductUseCase,
        private readonly findAllProductUseCase: FindAllProductUseCase
    ) { }

    @Post()
    async create(@Body() createFoodDto: CreateProductDto) {
        return this.createFoodUseCase.execute(createFoodDto);
    }
    @Get()
    async findAll() {
        return this.findAllProductUseCase.execute();
    }
}