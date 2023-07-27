import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ResipeService } from './recipe.servise';
import { AuthGuard } from 'src/auth/auth.guard';
import { RecipeCreateDto } from './dto/recipeCreate.dto';
import { RecipeUpdateDto } from './dto/recipeUpdate.dto';
import { User } from 'src/entities/user.entity';

@Controller('recipes')
export class RecipeController {
  constructor(private recipeServise: ResipeService) {}

  @UseGuards(AuthGuard)
  @Get('/user/:id')
  getAllRecipes(@Param('id') id: number, @Request() req) {
    return this.recipeServise.getAllRecipes(req.user.sub);
  }

  // @UseGuards(AuthGuard)
  // @Get(':id')
  // getRecipeById(@Param('id') id: number) {
  //   return this.recipeServise.getRecipeById(id);
  // }

  @UseGuards(AuthGuard)
  @Post()
  createRecipe(@Body() dto: RecipeCreateDto, @Request() req) {
    const userId: number = req.user.sub;
    return this.recipeServise.createRecipe(dto, userId);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  updateRecipe(
    @Param('id') id: number,
    @Body() dto: RecipeUpdateDto,
    @Request() req,
  ) {
    const userId: number = req.user.sub;
    return this.recipeServise.updateRecipe(id, dto, userId);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  deleteRecipe(@Param('id') id: number, @Request() req,) {
    const userId: number = req.user.sub;
    return this.recipeServise.deleteRecipe(id, userId);
  }
}
