import { Dispatch } from "redux";
import RequestInfo from "../../../../types/models/requestinfo";
import { categoryDetailActions } from "..";

const getCategoryAction = (
  sendRequest: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  name: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(categoryDetailActions.getCategoryLoading());
    const getCategory = async () => {
      const response = await sendRequest({
        url: `/category/name/${name}`,
        method: "GET",
      });
      if (response["status"] != "success")
        throw new Error("Something went wrong!");

      return response;
    };
    try {
      const response = await getCategory();
      dispatch(categoryDetailActions.getCategory(response["data"]["category"]));
    } catch (error: any) {
      dispatch(categoryDetailActions.getCategoryFailed(error.message));
    }
  };
};

export default getCategoryAction;
