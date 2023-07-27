import { Injectable, NotFoundException } from '@nestjs/common';
import { RecipeDto, RecipeUpdateDto } from './dto/recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from '../entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
  ) {}

  getAllRecipes() {
    return this.recipeRepository.find();
  }

  getRecipeById(id: number) {
    return this.recipeRepository.findBy({ id: id });
  }

  createRecipe(dto: RecipeDto) {
    const newRecipe = this.recipeRepository.create(dto);
    return this.recipeRepository.save(newRecipe);
  }

  async updateRecipe(id: number, dto: RecipeDto) {
    const recipeToUpdate: Recipe = await this.recipeRepository.findOneBy({
      id: id,
    });

    if (!recipeToUpdate) {
      throw new NotFoundException('Recipe not found');
    }

    if (dto.name) {
      recipeToUpdate.name = dto.name;
    }
    if (dto.ingredients) {
      recipeToUpdate.ingredients = dto.ingredients;
    }
    if (dto.description) {
      recipeToUpdate.description = dto.description;
    }

    return this.recipeRepository.save(recipeToUpdate);
  }
  deleteRecipe(id: number) {
    return this.recipeRepository.delete(id);
  }
}
