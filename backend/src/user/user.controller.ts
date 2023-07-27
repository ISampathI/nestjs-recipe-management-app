import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserRegistrationDto } from './dto/userRegistration.dto';

@Controller('users')
export class UserController {
  constructor(private userServise: UserService) {}

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userServise.getUserById(id);
  }

  @Post()
  createUser(@Body() dto: UserRegistrationDto) {
    return this.userServise.createUser(dto);
  }

  //   @Put(':id')
  //   updateUser(@Param('id') id: number, @Body() dto: UserDto) {
  //     return this.userServise.updateUser(id, dto);
  //   }

  //   @Delete(':id')
  //   deleteUser(@Param('id') id: number) {
  //     return this.userServise.deleteUser(id);
  //   }
}
