import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { userRecipeActions } from "..";

const getUserRecipes = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  username: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(userRecipeActions.isLoading());
    const loadRecipes = async () => {
      const res = await sendRequest({
        url: "/users/" + username + "/recipes",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch recipes");
      return res;
    };
    try {
      const res: any = await loadRecipes();
      dispatch(userRecipeActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(userRecipeActions.error([]));
    }
  };
};

export default getUserRecipes;
