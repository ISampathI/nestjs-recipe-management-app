import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { Password } from 'src/entities/password.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Password]),
    JwtModule.register({
      global: true,
      secret: "hello123!!",
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
