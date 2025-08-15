export interface CreateProductUseCaseParams {
    category_id: string;
    prod_name: string;
    prod_description?: string;
    prod_price: number;
}