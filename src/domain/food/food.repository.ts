import { Food } from './food.entity';

export interface IFoodRepository {
    create(food: Food): Promise<Food>;
    findAll(): Promise<Food[]>;
}