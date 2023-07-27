import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'src/user/dto/userLogin.dto';
import { userRegisterDto } from './dot/userRegister.dto';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post('login')
  userLogin(@Body() loginData: UserLoginDto) {
    return this.authServise.userLogin(loginData);
  }

  @Post('register')
  userRegister(@Body() registerData: userRegisterDto) {
    return this.authServise.userRegister(registerData);
  }
}
