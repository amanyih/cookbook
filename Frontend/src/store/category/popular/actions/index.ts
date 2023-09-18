import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { popularCategoriesActions } from "..";

const getPopularCategories = (
  sendRequst: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(popularCategoriesActions.loading());
    const loadCategories = async () => {
      const res = await sendRequst({
        url: "/category/popular",
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch categories");

      return res;
    };

    try {
      const res: any = await loadCategories();
      dispatch(
        popularCategoriesActions.getCategories(res["data"]["categories"])
      );
    } catch (err) {
      dispatch(popularCategoriesActions.error());
    }
  };
};

export default getPopularCategories;
