import { categories } from "@prisma/client";

export interface ProductProps {
    id?: string;
    category_id: string;
    category?: categories;
    prod_description: string;
    prod_name: string;
    prod_price: number;
}

export class ProductEntity {
    public readonly id?: string;
    public prod_name: string;
    public category_id: string;
    public category?: categories;
    public prod_description: string;
    public prod_price: number;

    constructor(props: ProductProps) {
        this.id = props.id || undefined;
        this.category_id = props.category_id;
        this.prod_description = props.prod_description;
        this.category = props.category || undefined;
        this.prod_name = props.prod_name;
        this.prod_price = props.prod_price;
    }
}