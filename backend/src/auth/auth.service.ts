import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UserLoginDto } from 'src/user/dto/userLogin.dto';
import { Repository } from 'typeorm';
import { userRegisterDto } from './dot/userRegister.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
      return user;
    }
    throw new NotFoundException('Incorect Password');
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
