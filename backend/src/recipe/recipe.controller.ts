import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { ResipeService } from './recipe.servise';
import { RecipeDto, RecipeUpdateDto } from './dto/recipe.dto';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeServise: ResipeService) {}
  @Get()
  getAllRecipes() {
    return this.recipeServise.getAllRecipes();
  }

  @Get(':id')
  getRecipeById(@Param('id') id: number) {
    return this.recipeServise.getRecipeById(id);
  }

  @Post()
  createRecipe(@Body() dto: RecipeDto) {
    return this.recipeServise.createRecipe(dto);
  }

  @Put(':id')
  updateRecipe(@Param('id') id: number, @Body() dto: RecipeDto) {
    return this.recipeServise.updateRecipe(id, dto);
  }

  @Delete(':id')
  deleteRecipe(@Param('id') id: number) {
    return this.recipeServise.deleteRecipe(id);
  }
}
