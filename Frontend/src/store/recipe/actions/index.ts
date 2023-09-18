import { recipeActions } from "..";
import { CreateRecipeDto } from "../../../types";
import { uiActions } from "../../ui";
import { Dispatch } from "redux";
import RequestInfo from "../../../types/models/requestinfo";

const getRecipes = (
  getRecipes: ({ url, method, body, header }: RequestInfo) => Promise<any>
) => {
  return async (dispatch: Dispatch) => {
    dispatch(recipeActions.isLoading());
    const loadRecipes = async () => {
      const res = await getRecipes({
        url: `/recipe`,
        method: "GET",
      });

      if (res["status"] !== "success")
        throw new Error("Failed to fetch recipes");

      return res;
    };
    try {
      const res: any = await loadRecipes();
      dispatch(recipeActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Something went wrong",
        })
      );
      dispatch(recipeActions.getRecipes([]));
    }
  };
};

const createRecipe = (
  createRecipe: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  recipe: CreateRecipeDto
) => {
  return async (dispatch: Dispatch) => {
    const loadRecipe = async () => {
      const res = await createRecipe({
        url: `/recipe`,
        method: "POST",
        body: recipe,
      });

      if (res["status"] !== "sucess")
        throw new Error("Failed to create recipe");

      return res;
    };

    try {
      const res: any = await loadRecipe();
      dispatch(recipeActions.createRecipe(res["data"]["recipe"]));
    } catch (err) {
      dispatch(recipeActions.createRecipe({}));
    }
  };
};

const likeRecipe = (
  likeRecipe: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  recipeId: number
) => {
  return async (dispatch: Dispatch) => {
    const loadRecipe = async () => {
      const res = await likeRecipe({
        url: `/recipe/${recipeId}/like`,
        method: "POST",
      });

      return res;
    };

    try {
      const res: any = await loadRecipe();
    } catch (err) {
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

const getRecipeByUserName = (
  getRecipeByUserId: ({
    url,
    method,
    body,
    header,
  }: RequestInfo) => Promise<any>,
  userId: number
) => {
  return async (dispatch: Dispatch) => {
    const loadRecipe = async () => {
      const res = await getRecipeByUserId({
        url: `/recipe/user/${userId}`,
        method: "GET",
      });

      if (res["status"] !== "sucess")
        throw new Error("Failed to fetch recipes");

      return res;
    };

    try {
      const res: any = await loadRecipe();
      dispatch(recipeActions.getRecipes(res["data"]["recipe"]));
    } catch (err) {
      dispatch(recipeActions.getRecipes([]));
    }
  };
};

const getRecipeDetail = (
  getRecipeDetail: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  recipeId: number
) => {
  return async (dispatch: Dispatch) => {
    const loadRecipe = async () => {
      const res = await getRecipeDetail({
        url: `/recipe/${recipeId}`,
        method: "GET",
      });

      if (res["status"] !== "sucess") throw new Error("Failed to fetch recipe");

      return res;
    };

    try {
      const res: any = await loadRecipe();
    } catch (err) {}
  };
};
const rateRecipe = (
  rateRecipe: ({ url, method, body, header }: RequestInfo) => Promise<any>,
  info: {
    recipeId: number;
    rating: number;
  }
) => {
  return async (dispatch: Dispatch) => {
    const loadRecipe = async () => {
      const res = await rateRecipe({
        url: `/recipe/${info.recipeId}/rating`,
        method: "POST",
        body: {
          rating: info.rating,
        },
      });

      return res;
    };

    try {
      const res: any = await loadRecipe();
      dispatch(
        uiActions.showNotification({
          success: true,
          title: "Success",
          message: "Recipe rated successfully",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          title: "Error",
          message: "Could not rate recipe! Try again later",
        })
      );
    }
  };
};

export {
  getRecipes,
  createRecipe,
  likeRecipe,
  getRecipeByUserName,
  getRecipeDetail,
  rateRecipe,
};
