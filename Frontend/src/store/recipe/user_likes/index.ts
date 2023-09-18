import { createSlice } from "@reduxjs/toolkit";
import { RecipeListDto } from "../../../types";

export interface UserLikesStateType {
  recipes: RecipeListDto[];
  loading: boolean;
  err: any;
}

const initialState: UserLikesStateType = {
  recipes: [],
  loading: false,
  err: null,
};

const userLikesSlice = createSlice({
  name: "userLikes",
  initialState,
  reducers: {
    getLikes(state, action) {
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
    },
  },
});

export const userLikesActions = userLikesSlice.actions;

export default userLikesSlice;
