import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './dto/auth.dto';
import { RegisterUseCase } from 'src/use-case/auth/register.auth.use-case';
import { LoginUseCase } from 'src/use-case/auth/login.auth.use-case';
import { LocalAuthGuard } from 'src/shared/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { Public } from 'src/shared/decorators/customize';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly register: RegisterUseCase,
    private readonly login: LoginUseCase
  ) { }
  @Public()
  @Post('register')
  signup(@Body() data: RegisterUserDto) {
    return this.register.execute(data);
  }
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signin(@Request() req) {
    return this.login.execute(req.user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
