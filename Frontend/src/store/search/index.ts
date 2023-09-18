import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../types";

export interface SearchStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  error: boolean;
  resultLength: number;
}

const initialState: SearchStateType = {
  recipes: [],
  loading: false,
  error: false,
  resultLength: 0,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    getSearch(
      state,
      action: {
        payload: RecipeListDto[];
        type: string;
      }
    ) {
      state.loading = false;
      const recies = action.payload;
      state.recipes = recies;
      state.resultLength = recies.length;
    },
    loading(state) {
      state.loading = true;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
