import { BiExit, BiUser, BiSave } from "react-icons/bi";
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
    <div className="mb-2">
      <Link to={props.to}>
        <div className="flex w-full justify-between items-center text-xl ">
          <span>{props.title}</span>
          <span className="text-2xl ">{props.icon}</span>
        </div>
      </Link>
    </div>
  );
};

const ProfileIcon = () => {
  return (
    <div className="relative group">
      <div className="peer cursor-pointer">
        <img
          src={x}
          alt="Profile"
          className="w-10 h-10 bg-yellow-400 rounded-full"
        />
      </div>

      <div className="absolute -bottom-96 invisible peer-hover:visible hover:visible -left-40 drop-shadow-2xl rounded-md bg-white dark:bg-slate-600 p-4 w-56 h-96 z-10">
        <div className="flex flex-col justify-between h-full">
          <div>
            <MenuItem to="profile" title="View Profile" icon={<BiUser />} />
            <MenuItem to="profile" title="Drafts" icon={<BiSave />} />
          </div>
          <MenuItem to="profile" title="Logout" icon={<BiExit />} />
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
