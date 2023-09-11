import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import {
  HomePage,
  ProfilePage,
  AboutPage,
  CategoriesPage,
  NewRecipePage,
  SearchPage,
  CommentsSection,
  RecipesSection,
  LikesSection,
  RecipeDetail,
  RecipePage,
  CategoryDetail,
} from "../pages";
import RecipeLayout from "../pages/recipe/layout";
import CategoryLayout from "../pages/categories/layout";
import Routes from "./route";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={Routes.HOME} element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path={Routes.PROFILE} element={<ProfilePage />}>
          <Route index element={<RecipesSection />} />
          <Route path={Routes.USER_COMMENT} element={<CommentsSection />} />
          <Route path={Routes.USER_LIKES} element={<LikesSection />} />
        </Route>
        <Route path={Routes.RECIPEPAGE} element={<RecipeLayout />}>
          <Route index element={<RecipePage />} />
          <Route path="new" element={<NewRecipePage />} />
          <Route path=":id" element={<RecipeDetail />} />
        </Route>

        <Route path={Routes.CATEGORIES} element={<CategoryLayout />}>
          <Route index element={<CategoriesPage />} />
          <Route path=":name" element={<CategoryDetail />} />
        </Route>
        <Route path={Routes.ABOUT} element={<AboutPage />} />
        <Route path={Routes.SEARCH} element={<SearchPage />} />
      </Route>
    </Route>
  )
);

export default routes;
