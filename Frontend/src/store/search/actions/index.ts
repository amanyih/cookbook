import { searchActions } from "..";
import { uiActions } from "../../ui";

const searchRecipesAction = (searchRecipes: any, title: string) => {
  return async (dispatch: any) => {
    dispatch(searchActions.loading());
    const fetchRecipes = async () => {
      const res = await searchRecipes({
        url: `/search/recipe?title=${title}`,
      });

      return res;
    };

    try {
      const res = await fetchRecipes();
      dispatch(searchActions.getSearch(res["data"]["recipe"]));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          success: false,
          message: "Something went wrong",
          title: "Error",
        })
      );
    }
  };
};

export { searchRecipesAction };
