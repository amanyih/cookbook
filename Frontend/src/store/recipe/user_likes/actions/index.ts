import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { userLikesActions } from "..";

const getUserLikedRecipes = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  username: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(userLikesActions.isLoading());
    const loadRecipes = async () => {
      const res = await sendRequest({
        url: "/users/" + username + "/likes",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch recipes");

      return res;
    };

    try {
      const res: any = await loadRecipes();
      dispatch(userLikesActions.getLikes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(userLikesActions.getLikes([]));
    }
  };
};

export default getUserLikedRecipes;
