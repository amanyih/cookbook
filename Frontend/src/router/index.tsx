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
} from "../pages";
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
        <Route path={Routes.RECIPEPAGE} element={<RecipePage />}>
          <Route path="new" element={<NewRecipePage />} />
          <Route path=":id" element={<RecipeDetail />} />
        </Route>

        <Route path={Routes.ABOUT} element={<AboutPage />} />
        <Route path={Routes.CATEGORIES} element={<CategoriesPage />} />
        <Route path={Routes.SEARCH} element={<SearchPage />} />
      </Route>
    </Route>
  )
);

export default routes;
