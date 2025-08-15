import { Inject } from "@nestjs/common";
import { ProductEntity } from "src/domain/product/product.entity";
import { IProductRepository } from "src/domain/product/product.repository";
import { CreateProductDto } from "src/presentation/product/dto/create-product.dto";

export class CreateProductUseCase {
    constructor(
        @Inject('IProductRepository')
        private productRepository: IProductRepository
    ) { }
    execute(data: CreateProductDto): Promise<ProductEntity> {
        const product = new ProductEntity(data);
        return this.productRepository.create(product);
    }
}