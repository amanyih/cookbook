import { createSlice } from "@reduxjs/toolkit";
import { RecipeDto } from "../../../types";

export interface RecipeDetailStateType {
  recipe: RecipeDto | null;
  loading: boolean;
  error: boolean;
}

const intialState: RecipeDetailStateType = {
  recipe: null,
  loading: false,
  error: false,
};

const recipeDetailSlice = createSlice({
  name: "recipe-detail",
  initialState: intialState,
  reducers: {
    getRecipeDetail(
      state,
      action: {
        payload: RecipeDto;
        type: string;
      }
    ) {
      state.recipe = action.payload;
      state.loading = false;
    },
    isLoading(state) {
      state.loading = true;
    },
    failed(state) {
      state.error = true;
      state.loading = false;
      state.recipe = null;
    },
  },
});

export const recipeDetailActions = recipeDetailSlice.actions;

export default recipeDetailSlice;
