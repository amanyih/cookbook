import { createSlice } from "@reduxjs/toolkit";
import { CategoryListDto } from "../../../types";

export interface PopularCategoriesStateType {
  categories: CategoryListDto[];
  loading: boolean;
  error: boolean;
}

const initialState: PopularCategoriesStateType = {
  categories: [],
  loading: false,
  error: false,
};

const popularCategories = createSlice({
  name: "popularCategories",
  initialState: initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
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
      state.categories = [];
    },
  },
});

export const popularCategoriesActions = popularCategories.actions;
export default popularCategories;
