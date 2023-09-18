import { createSlice } from "@reduxjs/toolkit";
import CommentListDto from "../../../types/dtos/comment/comment.list.dto";

export interface UsersCommentStateType {
  comments: CommentListDto[];
  isLoading: boolean;
  error: any;
}

const initialState: UsersCommentStateType = {
  comments: [],
  isLoading: false,
  error: null,
};

const userCommentSlice = createSlice({
  name: "usersComment",
  initialState,
  reducers: {
    getComments(state, action) {
      state.comments = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    isLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    error(state, action) {
      state.error = action.payload;
      state.isLoading = false;
      state.comments = [];
    },
  },
});

export const userCommentActions = userCommentSlice.actions;

export default userCommentSlice;
