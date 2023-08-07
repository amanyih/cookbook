import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import x from "../../assets/svg/chef.svg";

interface MenuItemProps {
  to: string;
  title: string;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div>
      <Link to={props.to}>
        <div className="flex items-center">
          {props.icon}
          <span>{props.title}</span>
        </div>
      </Link>
    </div>
  );
};

const ProfileIcon = () => {
  return (
    <div className="relative  group">
      <div className="peer cursor-pointer">
        <img
          src={x}
          alt="Profile"
          className="w-12 h-12 bg-yellow-400 rounded-full"
        />
      </div>

      <div className="absolute -bottom-96 invisible peer-hover:visible hover:visible -left-28 drop-shadow-2xl rounded-md bg-white p-4 w-56 h-96 z-10">
        <div>
          <MenuItem
            to="profile"
            title="View Profile"
            icon={<FontAwesomeIcon icon={faUser} className="mr-2" />}
          />
          <MenuItem
            to="profile"
            title="Logout"
            icon={
              <FontAwesomeIcon icon={faUser} className="mr-2 text-red-500" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
