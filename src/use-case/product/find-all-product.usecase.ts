import { Inject } from "@nestjs/common";
import { IProductRepository } from "src/domain/product/product.repository";

export class FindAllProductUseCase {
    constructor(
        @Inject('IProductRepository')
        private productRepository: IProductRepository,
    ) { }
    execute() {
        return this.productRepository.findAll();
    }
}