import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import { HomePage, ProfilePage } from "../pages";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

export default routes;
