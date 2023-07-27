export interface Recipe {
  id: string;
  name: string;
  ingredients: string;
  description: string;
}

export interface RecipeForm {
  name: string;
  ingredients: string;
  description: string;
}

export interface AppState {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
}
