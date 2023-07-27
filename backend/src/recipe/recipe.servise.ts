import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from '../entities/recipe.entity';
import { Repository } from 'typeorm';
import { RecipeCreateDto } from './dto/recipeCreate.dto';
import { RecipeUpdateDto } from './dto/recipeUpdate.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class ResipeService {
  constructor(
    @InjectRepository(Recipe)
    private recipeRepository: Repository<Recipe>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllRecipes(userId: number) {
    const user: User = await this.userRepository.findOne({
      where: { id: userId },
      relations: ['recipes'],
    });
    return user.recipes;
  }

  getRecipeById(id: number) {
    return this.recipeRepository.findBy({ id: id });
  }

  async createRecipe(dto: RecipeCreateDto, userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const newRecipe = this.recipeRepository.create({ ...dto, user: user });
    return { mm: this.recipeRepository.save(newRecipe), user, userId };
  }

  async updateRecipe(id: number, dto: RecipeUpdateDto, userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const recipeToUpdate: Recipe = await this.recipeRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });

    if (recipeToUpdate.user.id !== user.id) {
      throw new UnauthorizedException();
    }
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
  async deleteRecipe(id: number, userId: number) {
    const user = await this.userRepository.findOneBy({ id: userId });
    const recipeToDelete: Recipe = await this.recipeRepository.findOne({
      where: { id: id },
      relations: ['user'],
    });

    if (recipeToDelete.user.id !== user.id) {
      throw new UnauthorizedException();
    }
    if (!recipeToDelete) {
      throw new NotFoundException('Recipe not found');
    }

    return this.recipeRepository.delete(id);
  }
}
