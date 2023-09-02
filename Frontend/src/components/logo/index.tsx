import { Link } from "react-router-dom";
import Routes from "../../router/route";
const Logo = () => {
  return (
    <Link to={Routes.HOME}>
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-primary-400">CokBok</h1>
      </div>
    </Link>
  );
};

export default Logo;
