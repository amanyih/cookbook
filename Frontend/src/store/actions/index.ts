import {
  getAllDietTypesAction,
  getAllDishtypesAction,
  getAllMealCoursesAction,
  getAllOriginsAction,
} from "../category/actions";
import getCategoryAction from "../category/category_detail/actions";
import getPoularCategoriesAction from "../category/popular/actions";
import { createCommentAction, likeCommentAction } from "../comment/actions";
import getUserComments from "../comment/user_comment/actions";
import uploadImageAction from "../image/actions";
import {
  getProfileByUserNameAction,
  updateProfileAction,
  changePasswordAction,
} from "../profile/actions";

import {
  getRecipes,
  createRecipe,
  likeRecipe,
  getRecipeByUserName,
  getRecipeDetail,
  rateRecipe,
} from "../recipe/actions";

import createRecipeAction from "../recipe/createRecipe/actions";
import getFeaturedRecipes from "../recipe/featured/actions";
import getLatesRecipes from "../recipe/latest/actions";
import getTopActions from "../recipe/top/actions";
import { getRecipeDetailAction } from "../recipe/recipe_detail/actions";
import getUserLikedRecipes from "../recipe/user_likes/actions";
import getUserRecipes from "../recipe/user_recipes/actions";
import { searchRecipesAction } from "../search/actions";
import { uiActions } from "../ui";
import { filterActions } from "../filter";
import { imageActions } from "../image";

export {
  //category Actions
  getAllDietTypesAction,
  getAllDishtypesAction,
  getAllMealCoursesAction,
  getAllOriginsAction,
  getCategoryAction,
  getPoularCategoriesAction,
  //comment actions
  createCommentAction,
  likeCommentAction,
  getUserComments,
  //image action
  uploadImageAction,
  imageActions,
  //profile actions
  getProfileByUserNameAction,
  updateProfileAction,
  changePasswordAction,
  //recipe actions
  getRecipes,
  createRecipe,
  likeRecipe,
  getRecipeByUserName,
  getRecipeDetail,
  rateRecipe,
  createRecipeAction,
  getFeaturedRecipes,
  getLatesRecipes,
  getTopActions,
  getRecipeDetailAction,
  getUserLikedRecipes,
  getUserRecipes,
  searchRecipesAction,
  //ui actions
  uiActions,
  //filter actions
  filterActions,
};
