import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { ResipeService } from './recipe.servise';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from '../entities/recipe.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  controllers: [RecipeController],
  providers: [ResipeService],
})
export class RecipeModule {}
