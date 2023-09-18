import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../../types";

export interface UserRecipeInterface {
  recipes: RecipeListDto[];
  loading: boolean;
  err: any;
}

const initialState: UserRecipeInterface = {
  recipes: [],
  loading: false,
  err: null,
};

const userRecipeSlice = createSlice({
  name: "userRecipe",
  initialState,
  reducers: {
    getRecipes(state, action) {
      state.recipes = action.payload;
      state.loading = false;
      state.err = null;
    },
    isLoading(state) {
      state.loading = true;
      state.err = null;
    },
    error(state, action) {
      state.err = action.payload;
      state.loading = false;
      state.recipes = [];
    },
  },
});

export const userRecipeActions = userRecipeSlice.actions;
export default userRecipeSlice;
