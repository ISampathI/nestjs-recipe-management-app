import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegistrationDto } from './dto/userRegistration.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  getUserById(id: number) {
    return 'mmm';
  }

  createUser(dto: UserRegistrationDto) {
    const newUser = this.userRepository.create(dto);
    return this.userRepository.save(newUser);
  }

  //   async updateUser(id: number, dto: UserDto) {
  //     return 'mmm';
  //   }
  //   deleteUser(id: number) {
  //     return 'mmm';
  //   }
}
