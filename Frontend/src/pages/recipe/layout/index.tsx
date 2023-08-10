import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "../../../components";

const RecipeLayout = () => {
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  console.log(path === "new");

  return (
    <div>
      {path === "recipe" && (
        <Link to="new">
          <Button
            className="mr-auto mb-5"
            isLarge={true}
            isOutlined={true}
            isRounded={true}
            onClick={() => {}}
          >
            Create
          </Button>
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default RecipeLayout;
