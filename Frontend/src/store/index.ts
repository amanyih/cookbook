import { configureStore } from "@reduxjs/toolkit";
import filterSlice, { FilterStateType } from "./filter";
import categorySlice, { CategoryStateType } from "./category";
import recipeSlice, { RecipeStateType } from "./recipe";
import uiSlice, { UiStateType } from "./ui";
import searchSlice, { SearchStateType } from "./search";
import recipeDetailSlice, {
  RecipeDetailStateType,
} from "./recipe/recipe_detail";
import createRecipeSlice, {
  CreateRecipeStateType,
} from "./recipe/createRecipe";
import imageSlice, { ImageStateType } from "./image";
import profileSlice, { ProfileStateType } from "./profile";
import categoryDetailSlice, {
  CategoryDetailStateType,
} from "./category/category_detail";
import commentSlice, { CommentStateType } from "./comment";
import userCommentSlice, {
  UsersCommentStateType,
} from "./comment/user_comment";
import userLikesSlice, { UserLikesStateType } from "./recipe/user_likes";
import userRecipeSlice, { UserRecipeInterface } from "./recipe/user_recipes";
import featuredSlice, { FeaturedStateType } from "./recipe/featured";
import topSlice, { TopRecipeStateType } from "./recipe/top";
import latestSlice, { LatestRecipeStateType } from "./recipe/latest";
import popularCategories, {
  PopularCategoriesStateType,
} from "./category/popular";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    category: categorySlice.reducer,
    recipe: recipeSlice.reducer,
    recipeDetail: recipeDetailSlice.reducer,
    search: searchSlice.reducer,
    ui: uiSlice.reducer,
    createRecipe: createRecipeSlice.reducer,
    image: imageSlice.reducer,
    profile: profileSlice.reducer,
    categoryDetail: categoryDetailSlice.reducer,
    comment: commentSlice.reducer,
    userComment: userCommentSlice.reducer,
    userLikes: userLikesSlice.reducer,
    userRecipes: userRecipeSlice.reducer,
    featured: featuredSlice.reducer,
    top: topSlice.reducer,
    latest: latestSlice.reducer,
    poularCategories: popularCategories.reducer,
  },
});

export interface StateInterface {
  filter: FilterStateType;
  category: CategoryStateType;
  recipe: RecipeStateType;
  search: SearchStateType;
  ui: UiStateType;
  recipeDetail: RecipeDetailStateType;
  createRecipe: CreateRecipeStateType;
  image: ImageStateType;
  profile: ProfileStateType;
  categoryDetail: CategoryDetailStateType;
  comment: CommentStateType;
  userComment: UsersCommentStateType;
  userLikes: UserLikesStateType;
  userRecipes: UserRecipeInterface;
  featured: FeaturedStateType;
  top: TopRecipeStateType;
  latest: LatestRecipeStateType;
  poularCategories: PopularCategoriesStateType;
}

export default store;
