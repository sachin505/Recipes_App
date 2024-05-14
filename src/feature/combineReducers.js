import recipeSlice from "./recipes/recipeSlice";
import currentRecipeSlice from "./recipes/currentRecipeSlice";
import { combineReducers } from "redux";

export default combineReducers({
    currentRecipeSlice:currentRecipeSlice,
    recipeSlice:recipeSlice
})