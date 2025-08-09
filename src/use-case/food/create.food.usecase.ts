import { Inject } from "@nestjs/common";
import { FoodEntity } from "src/domain/food/food.entity";
import { IFoodRepository } from "src/domain/food/food.repository";

export class CreateFoodUseCase {
    constructor(
        @Inject('IFoodRepository')
        private foodRepository: IFoodRepository
    ) { }
    execute(data: { name: string; price: number; description: string }) {
        const food = new FoodEntity("1", data.name, data.price, data.description);
        console.log("Creating food with data:", food);
        return this.foodRepository.create(food);
    }
}