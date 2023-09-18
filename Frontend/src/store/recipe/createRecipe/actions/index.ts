import { CreateRecipeDto } from "../../../../types";
import { createRecipeActions } from "..";
import { uiActions } from "../../../ui";

const createRecipeAction = (createRecipe: any, recipe: CreateRecipeDto) => {
  return async (dispatch: any) => {
    dispatch(createRecipeActions.createRecipeLoading());
    const upload = async () => {
      const res = await createRecipe({
        url: "/recipe",
        method: "POST",
        body: recipe,
      });

      if (res["status"] != "success")
        throw new Error("Error while uploading recipe");

      return res;
    };
    try {
      const res = await upload();
      dispatch(createRecipeActions.createRecipe(res["data"]["recipe"]));
    } catch (err) {
      dispatch(createRecipeActions.createRecipeError());
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Error while uploading recipe. Please try again later.",
        })
      );
    }
  };
};

export default createRecipeAction;
