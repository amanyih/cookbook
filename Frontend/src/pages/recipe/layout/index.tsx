import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "../../../components";
import { GiFullPizza } from "react-icons/gi";

const RecipeLayout = () => {
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  return (
    <div>
      {path === "recipe" && (
        <Link to="new">
          <Button className="flex items-center">
            C R E A T E &nbsp; R E C I P E &nbsp;
            <GiFullPizza className="text-2xl animate-bounce" />
          </Button>
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default RecipeLayout;
