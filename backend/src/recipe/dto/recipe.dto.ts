import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class RecipeDto {
  @ApiProperty({
    description: 'The name of the recipe',
    example: 'Chicken Stir-Fry',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The ingredients of the recipe',
    example:
      'Chicken breast, bell peppers, broccoli, carrots, soy sauce, ginger, garlic',
  })
  @IsString()
  @IsNotEmpty()
  ingredients: string;

  @ApiProperty({
    description: 'The description of the recipe',
    example:
      "Chicken Stir-Fry is a quick and healthy dish that's packed with flavor and colorful vegetables.",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class RecipeUpdateDto {
  @IsString()
  @IsNotEmpty()
  id: string;

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
