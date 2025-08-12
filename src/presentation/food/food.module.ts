// import { Module } from '@nestjs/common';
// import { FoodController } from './food.controller';
// import { PrismaFoodRepository } from 'src/infrastructure/database/repositories/food/food.repository.impl';
// import { CreateFoodUseCase } from 'src/use-case/food/create.food.usecase';
// import { FindAllFoodUseCase } from 'src/use-case/food/findAll.usecase';

// @Module({
//     imports: [],
//     controllers: [FoodController],
//     providers: [
//         CreateFoodUseCase,
//         FindAllFoodUseCase,
//         PrismaFoodRepository,
//         {
//             provide: 'IFoodRepository',
//             useClass: PrismaFoodRepository,
//         },
//     ],
// })
// export class FoodModule { }