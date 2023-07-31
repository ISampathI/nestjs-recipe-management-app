import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'src/user/dto/userLogin.dto';
import { userRegisterDto } from './dot/userRegister.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post('login')
  userLogin(@Body() loginData: UserLoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authServise.userLogin(loginData, res);
  }

  @Post('register')
  userRegister(@Body() registerData: userRegisterDto) {
    return this.authServise.userRegister(registerData);
  }
}
