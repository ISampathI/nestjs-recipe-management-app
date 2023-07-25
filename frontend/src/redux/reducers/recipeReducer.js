import { ActionTypes } from "../constants/actionTypes";

// Reducer for managing the recipes state
export const recipeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_RECIPES:
      return payload;
    default:
      return state;
  }
};

// Reducer for managing the selectedRecipe state
export const selectedRecipeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_RECIPE:
      return payload;
    default:
      return state;
  }
};
