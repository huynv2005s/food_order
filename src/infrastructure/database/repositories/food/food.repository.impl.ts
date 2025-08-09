import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { IFoodRepository } from 'src/domain/food/food.repository';
import { Food } from 'src/domain/food/food.entity';

@Injectable()
export class PrismaFoodRepository implements IFoodRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(food: Food): Promise<Food> {
        const createdFood = await this.prisma.food.create({
            data: {
                name: food.name,
                description: food.description,
                price: food.price,
            },
        });
        return new Food(createdFood.id, createdFood.name, createdFood.price, createdFood.description);
    }
    async findAll(): Promise<Food[]> {
        return await this.prisma.food.findMany()
    }
}