import { recipeDetailActions } from "..";
import { uiActions } from "../../../ui";
import { RecipeDto } from "../../../../types";
import { title } from "process";
import { commentActions } from "../../../comment";

const getRecipeDetailAction = (getRecipeDetail: any, id: string) => {
  return async (dispatch: any) => {
    dispatch(recipeDetailActions.isLoading());
    dispatch(commentActions.reset());
    const fetchRecipeDetail = async () => {
      const res = await getRecipeDetail({
        url: `/recipe/${id}`,
      });

      console.log(res);

      if (res["status"] != "success") throw new Error("Something went wrong");
      return res;
    };

    try {
      const res: any = await fetchRecipeDetail();
      dispatch(recipeDetailActions.getRecipeDetail(res["data"]["recipe"]));
      dispatch(commentActions.getComments(res["data"]["recipe"]["comments"]));
    } catch (err) {
      dispatch(recipeDetailActions.failed());
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
    }
  };
};

export { getRecipeDetailAction };
