import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { topActions } from "..";

const getTopActions = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(topActions.loading());
    const loadRecipes = async () => {
      const res = await sendRequest({
        url: "/recipe/top",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch recipes");

      return res;
    };

    try {
      const res: any = await loadRecipes();
      dispatch(topActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(topActions.error());
    }
  };
};

export default getTopActions;
