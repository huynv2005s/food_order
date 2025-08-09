import { Inject } from "@nestjs/common";
import { Food } from "src/domain/food/food.entity";
import { IFoodRepository } from "src/domain/food/food.repository";

export class FindAllFoodUseCase {
    constructor(
        @Inject('IFoodRepository')
        private foodRepository: IFoodRepository
    ) { }
    execute() {
        return this.foodRepository.findAll();
    }
}