import { Controller, Get, Post } from '@nestjs/common';
import { ResipeService } from './recipe.servise';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeServise: ResipeService) {}
  @Get()
  getAllRecipes() {
    return this.recipeServise.getAllRecipes();
  }

  @Get()
  getRecipeById() {
    return this.recipeServise.getRecipeById();
  }

  @Post()
  createRecipe() {
    return this.recipeServise.createRecipe();
  }
}
