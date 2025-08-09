import { Inject } from "@nestjs/common";
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