import { FoodEntity } from './food.entity';

export interface IFoodRepository {
    create(food: FoodEntity): Promise<FoodEntity>;
    findAll(): Promise<FoodEntity[]>;
}