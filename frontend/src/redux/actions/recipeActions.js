import { ActionTypes } from "../constants/actionTypes";

// Action creator to set recipes
export const setRecipes = (recipes) => {
  return {
    type: ActionTypes.SET_RECIPES,
    payload: recipes,
  };
};

// Action creator to select a recipe
export const selectRecipe = (recipe) => {
  return {
    type: ActionTypes.SELECT_RECIPE,
    payload: recipe,
  };
};
