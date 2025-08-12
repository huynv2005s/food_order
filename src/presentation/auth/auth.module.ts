import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaAuthRepository } from 'src/infrastructure/database/repositories/auth/auth.repository.impl';
import { RegisterUseCase } from 'src/use-case/auth/register.auth.use-case';
import { UserModule } from '../user/user.module';
import { LoginUseCase } from 'src/use-case/auth/login.auth.use-case';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/shared/strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/shared/strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [
    RegisterUseCase,
    LoginUseCase,
    {
      provide: 'IAuthRepository',
      useClass: PrismaAuthRepository,
    },

    LocalStrategy,
    JwtStrategy
  ],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: "test_thoi",
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule { }
