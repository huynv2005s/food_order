import { Controller, Post, Body, Get, Inject } from '@nestjs/common';
import { CreateFoodUseCase } from 'src/use-case/food/create.food.usecase';
import { FindAllFoodUseCase } from 'src/use-case/food/findAll.usecase';

@Controller('foods')
export class FoodController {
    constructor(
        private readonly createFoodUseCase: CreateFoodUseCase,
        private readonly findAllFoodUseCase: FindAllFoodUseCase
    ) { }

    @Post()
    async create(@Body() createFoodDto: any) {
        return this.createFoodUseCase.execute(createFoodDto);
    }
    @Get()
    async findAll() {
        return this.findAllFoodUseCase.execute();
    }
}