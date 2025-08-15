import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { ProductEntity } from 'src/domain/product/product.entity';
import { IProductRepository } from 'src/domain/product/product.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { BaseRepository } from 'src/shared/bases/base.repository';
import { CreateProductUseCaseParams } from 'src/shared/interfaces/product.interface';
import { ProductMapper } from '../../mappers/product.mapper';
import { RedisService } from 'src/infrastructure/cache/redis/redis.service';
import { RedisKeys } from 'src/shared/configs/redis-keys';

@Injectable()
export class PrismaProductRepository extends BaseRepository implements IProductRepository {
    constructor(
        protected readonly prisma: PrismaService,
        private readonly redisService: RedisService,
    ) {
        super(prisma);
    }

    async create(product: CreateProductUseCaseParams, tx?: Prisma.TransactionClient): Promise<ProductEntity> {
        const created = await this.getDb(tx).products.create({
            data: ProductMapper.toPrisma(product),
            include: { category: true },
        });
        return ProductMapper.toDomain(created);
    }
    async findAll(tx?: Prisma.TransactionClient): Promise<ProductEntity[]> {
        const cachedData = await this.redisService.get(RedisKeys.products.all);
        if (cachedData) {
            return ProductMapper.toDomains(JSON.parse(cachedData as string));
        }
        const products = await this.getDb(tx).products.findMany({
            include: { category: true },
        });
        await this.redisService.set(RedisKeys.products.all, JSON.stringify(products), 3600)
        return ProductMapper.toDomains(products);
    }
}