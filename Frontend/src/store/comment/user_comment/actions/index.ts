import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { userCommentActions } from "..";

const getUserComments = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  username: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(userCommentActions.isLoading());
    const loadComments = async () => {
      const res = await sendRequest({
        url: "/users/" + username + "/comments",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch comments");

      return res;
    };

    try {
      const res: any = await loadComments();
      dispatch(userCommentActions.getComments(res["data"]["comments"]));
    } catch (err) {
      dispatch(userCommentActions.getComments([]));
    }
  };
};

export default getUserComments;
