import { createSlice } from "@reduxjs/toolkit";
import { CategoryDetialDto } from "../../../types";

export interface CategoryDetailStateType {
  category: CategoryDetialDto | null;
  loading: boolean;
  error: string | null;
}

const intialCategory = {
  category: null,
  loading: false,
  error: null,
};

const categoryDetailSlice = createSlice({
  name: "categoryDetail",
  initialState: intialCategory,
  reducers: {
    getCategory(state, action) {
      state.category = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCategoryFailed(state, action) {
      state.category = null;
      state.loading = false;
      state.error = action.payload;
    },
    getCategoryLoading(state) {
      state.category = null;
      state.loading = true;
      state.error = null;
    },

    reset(state) {
      state.category = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const categoryDetailActions = categoryDetailSlice.actions;
export default categoryDetailSlice;
