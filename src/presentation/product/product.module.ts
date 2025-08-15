import { Module } from '@nestjs/common';
import { PrismaProductRepository } from 'src/infrastructure/database/repositories/product/product.repository.impl';
import { CreateProductUseCase } from 'src/use-case/product/create.product.usecase';
import { ProductController } from './products.controller';
import { FindAllProductUseCase } from 'src/use-case/product/find-all-product.usecase';

@Module({
    imports: [],
    controllers: [ProductController],
    providers: [
        CreateProductUseCase,
        FindAllProductUseCase,
        {
            provide: 'IProductRepository',
            useClass: PrismaProductRepository,
        },
    ],
})
export class ProductModule { }