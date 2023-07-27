import { ActionTypes } from "../constants/actionTypes";

// Action creator to set recipes
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

// Action creator to select a recipe
export const selectRecipe = (recipe) => {
  return {
    type: ActionTypes.SELECT_RECIPE,
    payload: recipe,
  };
};
