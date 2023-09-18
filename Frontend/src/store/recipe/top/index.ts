import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../../types";

export interface TopRecipeStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  error: boolean;
}

const initialState: TopRecipeStateType = {
  recipes: [],
  loading: false,
  error: false,
};

const topSlice = createSlice({
  name: "topRecipe",
  initialState: initialState,
  reducers: {
    getRecipes(state, action) {
      state.recipes = action.payload;
      state.loading = false;
      state.error = false;
    },
    loading(state) {
      state.loading = true;
      state.error = false;
    },
    error(state) {
      state.loading = false;
      state.error = true;
      state.recipes = [];
    },
  },
});

export const topActions = topSlice.actions;

export default topSlice;
