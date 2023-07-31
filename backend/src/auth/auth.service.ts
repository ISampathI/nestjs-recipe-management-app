import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserLoginDto } from 'src/user/dto/userLogin.dto';
import { Repository } from 'typeorm';
import { userRegisterDto } from './dot/userRegister.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Password } from 'src/entities/password.entity';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Password)
    private passwordRepository: Repository<Password>,
    private jwtService: JwtService,
  ) {}

  async userLogin(loginData: UserLoginDto, res: Response) {
    const user = await this.userRepository.findOneBy({
      username: loginData.username,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const password = await this.passwordRepository.findOneBy({
      userId: user.id,
    });
    const isMatch = await bcrypt.compare(loginData.password, password.password);
    if (isMatch) {
      const payload = {
        sub: user.id,
        username: user.username,
        email: user.email,
      };

      const token = await this.jwtService.signAsync(payload);

      return {
        access_token: token,
        user,
      };
    }
    throw new UnauthorizedException();
  }

  async userRegister(registerData: userRegisterDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(registerData.password, salt);

    const newUser = this.userRepository.create({
      username: registerData.username,
      email: registerData.email,
    });
    const user = await this.userRepository.save(newUser);

    const newPassword = this.passwordRepository.create({
      password: hash,
      userId: user.id,
    });

    await this.passwordRepository.save(newPassword);

    return user;
  }
}
