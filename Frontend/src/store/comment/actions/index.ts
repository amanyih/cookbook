import { Dispatch } from "redux";
import RequestInfo from "../../../types/models/requestinfo";
import { commentActions } from "..";
import CreateCommentDto from "../../../types/dtos/comment/create.comment.dto";
import { uiActions } from "../../ui";

const createCommentAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  comment: CreateCommentDto
) => {
  return async (dispatch: Dispatch) => {
    dispatch(commentActions.createCommentLoading());
    const createComment = async () => {
      const response = await sendRequest({
        url: `/comment`,
        method: "POST",
        body: comment,
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await createComment();
      dispatch(commentActions.createComment(response["data"]["comment"]));
      dispatch(
        uiActions.showNotification({
          success: true,
          message: "Comment created successfully!",
          title: "Success",
        })
      );
    } catch (error: any) {
      dispatch(commentActions.createCommentFailed(error.message));
      dispatch(
        uiActions.showNotification({
          success: false,
          message: "Could not create comment! Please try again!",
          title: "Error",
        })
      );
    }
  };
};

const likeCommentAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  commentId: string
) => {
  return async (dispatch: Dispatch) => {
    const likeComment = async () => {
      const response = await sendRequest({
        url: `/comment/${commentId}/like`,
        method: "POST",
        body: {},
      });

      return response;
    };
    try {
      const response = await likeComment();
    } catch (error: any) {
      dispatch(
        uiActions.showNotification({
          success: false,
          message: "Could not like comment! Please try again!",
          title: "Error",
        })
      );
    }
  };
};

export { createCommentAction, likeCommentAction };
