import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "../../../components";

const RecipeLayout = () => {
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  return (
    <div>
      {path === "recipe" && (
        <Link to="new">
          <Button
            className="mr-auto mb-5 dark:bg-slate-500"
            isLarge={true}
            isOutlined={true}
            isRounded={true}
            onClick={() => {}}
          >
            Create New
          </Button>
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default RecipeLayout;
