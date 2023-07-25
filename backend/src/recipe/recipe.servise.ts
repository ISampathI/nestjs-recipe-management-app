import { Injectable } from '@nestjs/common';
import { recipesData } from './recipeDB';

@Injectable()
export class ResipeService {
  resipesData = recipesData;

  getAllRecipes() {
    return this.resipesData;
  }

  getRecipeById() {
    return this.resipesData[0];
  }

  createRecipe() {
    return 'SaF';
  }
}
