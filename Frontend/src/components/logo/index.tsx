import { Link } from "react-router-dom";
import Routes from "../../router/route";

interface LogoProps {
  navigate?: boolean;
}
const Logo: React.FC<LogoProps> = ({ navigate = true }) => {
  return (
    <Link to={navigate ? Routes.HOME : ""}>
      <div className="mb-2">
        <h1 className="text-3xl font-bold text-primary-400">CookBook</h1>
      </div>
    </Link>
  );
};

export default Logo;
