import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { ResipeService } from './recipe.servise';

@Module({ controllers: [RecipeController], providers: [ResipeService] })
export class RecipeModule {}
