import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { ResipeService } from './recipe.servise';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from '../entities/recipe.entity';
import { User } from 'src/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Recipe, User])],
  controllers: [RecipeController],
  providers: [ResipeService],
})
export class RecipeModule {}
