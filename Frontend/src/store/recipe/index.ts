import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto, CreateRecipeDto, RecipeDto } from "../../types";

export interface RecipeStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  error: boolean;
}

const initialState: RecipeStateType = {
  recipes: [],
  loading: false,
  error: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: initialState,
  reducers: {
    createRecipe(state, action) {
      const recipe = action.payload;
    },
    getRecipes(
      state,
      action: {
        payload: RecipeListDto[];
        type: string;
      }
    ) {
      const recipes = action.payload;
      state.recipes = recipes;
      state.loading = false;
    },
    isLoading(state) {
      state.loading = true;
    },
  },
});

export const recipeActions = recipeSlice.actions;
export default recipeSlice;
