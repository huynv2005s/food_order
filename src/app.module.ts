import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './infrastructure/database/prisma/prisma.module';
import { AuthModule } from './presentation/auth/auth.module';
import { UserModule } from './presentation/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './shared/guards/jwt-auth.guard';
import { ProductModule } from './presentation/product/product.module';
import { RedisModule } from './infrastructure/cache/redis/redis.module';

@Module({
  imports: [PrismaModule,
    AuthModule,
    UserModule,
    ProductModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
