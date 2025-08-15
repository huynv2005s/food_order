import { CreateProductUseCaseParams } from "src/shared/interfaces/product.interface";


export interface IProductRepository {
    create(data: CreateProductUseCaseParams): Promise<any>;
    findAll(): Promise<any>;
}