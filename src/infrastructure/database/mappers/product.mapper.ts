import { categories, products } from '@prisma/client';
import { ProductEntity } from 'src/domain/product/product.entity';
import { CreateProductUseCaseParams } from 'src/shared/interfaces/product.interface';
type ProductWithInclude = products & { category: categories };

export class ProductMapper {
    static toDomain(raw: ProductWithInclude): ProductEntity {
        return new ProductEntity({
            id: raw.id,
            category_id: raw.category_id,
            prod_name: raw.prod_name,
            prod_description: raw.prod_description || '',
            prod_price: raw.prod_price,
            category: raw.category,
        });
    }
    static toDomains(raws: ProductWithInclude[]): ProductEntity[] {
        return raws.map((raw) => this.toDomain(raw));
    }
    static toPrisma(raw: CreateProductUseCaseParams) {
        return {
            prod_name: raw.prod_name,
            category_id: raw.category_id,
            prod_description: raw.prod_description || '',
            prod_price: raw.prod_price,
        };
    }
}