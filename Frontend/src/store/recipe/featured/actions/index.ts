import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { featuredActions } from "..";

const getFeaturedRecipes = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(featuredActions.isLoading());
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
      dispatch(featuredActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(featuredActions.error([]));
    }
  };
};

export default getFeaturedRecipes;
