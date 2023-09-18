import { createSlice } from "@reduxjs/toolkit";

export interface CreateRecipeStateType {
  recipe: any;
  loading: boolean;
  error: boolean;
}

const initialState: CreateRecipeStateType = {
  recipe: null,
  loading: false,
  error: false,
};

const createRecipeSlice = createSlice({
  name: "createRecipe",
  initialState: initialState,
  reducers: {
    createRecipe: (
      state,
      action: {
        payload: any;
        type: string;
      }
    ) => {
      state.loading = false;
      state.error = false;
      state.recipe = action.payload;
    },
    createRecipeLoading: (state) => {
      state.error = false;
      state.loading = true;
    },
    createRecipeError: (state) => {
      state.loading = false;
      state.recipe = null;
      state.error = true;
    },
  },
});

export const createRecipeActions = createRecipeSlice.actions;

export default createRecipeSlice;
