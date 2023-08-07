import { Outlet } from "react-router";

const RecipePage = () => {
  return (
    <div>
      <div>Recipe</div>
      <Outlet />
    </div>
  );
};

export default RecipePage;
