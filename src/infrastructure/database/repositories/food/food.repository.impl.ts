// import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
// import { IFoodRepository } from 'src/domain/food/food.repository';
// import { FoodEntity } from 'src/domain/food/food.entity';

// @Injectable()
// export class PrismaFoodRepository implements IFoodRepository {
//     constructor(private readonly prisma: PrismaService) { }

//     async create(food: FoodEntity): Promise<FoodEntity> {
//         const createdFood = await this.prisma.food.create({
//             data: {
//                 name: food.name,
//                 description: food.description,
//                 price: food.price,
//             },
//         });
//         return new FoodEntity(createdFood.id, createdFood.name, createdFood.price, createdFood.description);
//     }
//     async findAll(): Promise<FoodEntity[]> {
//         return await this.prisma.food.findMany()
//     }
// }