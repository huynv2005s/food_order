import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

export interface ICacheService {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, ttl?: number): Promise<void>;
    del(key: string): Promise<void>;
}

@Injectable()
export class RedisService implements ICacheService {
    private readonly client: Redis;

    constructor() {
        this.client = new Redis({
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT ? 15245 : 6379,
            password: "Huy2005@",
            username: "huynv2005s"
        });

        this.client.on('connect', () => console.log('Connected to Redis'));
        this.client.on('error', (error) => console.error('Redis error:', error));
    }

    onModuleDestroy() {
        this.client.quit();
    }

    async get<T>(key: string): Promise<T | null> {
        const data = await this.client.get(key);
        return data ? JSON.parse(data) : null;
    }

    async set<T>(key: string, value: T, ttl?: number): Promise<void> {
        const serializedValue = JSON.stringify(value);
        if (ttl) {
            await this.client.set(key, serializedValue, 'EX', ttl = 60 * 10);
        } else {
            await this.client.set(key, serializedValue);
        }
    }

    async del(key: string): Promise<void> {
        await this.client.del(key);
    }
}