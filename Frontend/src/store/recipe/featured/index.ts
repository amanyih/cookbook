import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../../types";

export interface FeaturedStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  error: boolean;
}

const initialState: FeaturedStateType = {
  recipes: [],
  loading: false,
  error: false,
};

const featuredSlice = createSlice({
  name: "featured",
  initialState: initialState,
  reducers: {
    getRecipes(state, action) {
      const recipes = action.payload;
      state.recipes = recipes;
      state.loading = false;
    },
    isLoading(state) {
      state.loading = true;
      state.error = false;
    },
    error(state, action) {
      state.loading = false;
      state.error = true;
      state.recipes = [];
    },
  },
});

export const featuredActions = featuredSlice.actions;
export default featuredSlice;
