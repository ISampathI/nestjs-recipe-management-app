import { combineReducers } from "redux";
import { recipeReducer, selectedRecipeReducer } from "./recipeReducer";

// Combine multiple reducers into a single root reducer
const reducers = combineReducers({
  recipes: recipeReducer,
  selectedRecipe: selectedRecipeReducer,
});

export default reducers;
