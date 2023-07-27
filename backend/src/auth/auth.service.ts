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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async userLogin(loginData: UserLoginDto) {
    const user = await this.userRepository.findOneBy({
      username: loginData.username,
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isMatch = await bcrypt.compare(loginData.password, user.password);
    if (isMatch) {
      delete user.password;
      const payload = { sub: user.id, username: user.username };

      return {
        access_token: await this.jwtService.signAsync(payload),
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
      password: hash,
    });

    return this.userRepository.save(newUser);
  }
}
