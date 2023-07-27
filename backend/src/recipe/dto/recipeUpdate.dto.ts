import { IsNotEmpty, IsString } from "class-validator";

export class RecipeUpdateDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    ingredients: string;
  
    @IsString()
    @IsNotEmpty()
    description: string;
  }
  