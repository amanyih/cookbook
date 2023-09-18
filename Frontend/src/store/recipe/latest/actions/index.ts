import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { latestActions } from "..";

const getLatesRecipes = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(latestActions.loading());
    const loadRecipes = async () => {
      const res = await sendRequest({
        url: "/recipe/featured",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch recipes");

      return res;
    };

    try {
      const res: any = await loadRecipes();
      dispatch(latestActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(latestActions.error());
    }
  };
};

export default getLatesRecipes;
