import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../../types";

export interface LatestRecipeStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  error: boolean;
}

const initialState: LatestRecipeStateType = {
  recipes: [],
  loading: false,
  error: false,
};

const latestSlice = createSlice({
  name: "latestRecipe",
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

export const latestActions = latestSlice.actions;

export default latestSlice;
