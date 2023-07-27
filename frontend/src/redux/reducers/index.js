import { combineReducers } from "redux";
import { recipeReducer, selectedRecipeReducer } from "./recipeReducer";
import { userReducer } from "./userReducer";

// Combine multiple reducers into a single root reducer
const reducers = combineReducers({
  recipes: recipeReducer,
  selectedRecipe: selectedRecipeReducer,

  user: userReducer,
});

export default reducers;
