import { createSlice } from "@reduxjs/toolkit";
import CommentListDto from "../../types/dtos/comment/comment.list.dto";

export interface CommentStateType {
  comments: CommentListDto[];
  loading: boolean;
  error: string | null;
  createCommentLoading: boolean;
  createCommentError: string | null;
}

const initialState: CommentStateType = {
  comments: [],
  loading: false,
  error: null,
  createCommentLoading: false,
  createCommentError: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    createComment(
      state,
      action: {
        payload: CommentListDto;
        type: string;
      }
    ) {
      state.comments.push(action.payload);
      state.createCommentLoading = false;
      state.createCommentError = null;
    },
    createCommentFailed(state, action) {
      state.createCommentLoading = false;
      state.createCommentError = action.payload;
    },
    createCommentLoading(state) {},
    getComments(state, action: { payload: CommentListDto[]; type: string }) {
      state.comments = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCommentsFailed(state, action) {
      state.comments = [];
      state.loading = false;
      state.error = action.payload;
    },
    getCommentsLoading(state) {
      state.comments = [];
      state.loading = true;
      state.error = null;
    },

    reset(state) {
      state = initialState;
    },
  },
});

export const commentActions = commentSlice.actions;
export default commentSlice;
