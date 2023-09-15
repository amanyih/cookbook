import { BiExit, BiUser, BiSave } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import x from "../../assets/svg/chef.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/context";
import LogoutConfirmation from "./logout_confirmation";
import useCurrentUser from "../../hooks/useCurrentUser";
import constants from "../../constants";

interface MenuItemProps {
  to: string;
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div
      className=" cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 ease-in-out px-5 py-3 mb-5 rounded-lg"
      onClick={props.onClick}
    >
      <Link to={props.to!}>
        <div className="flex w-full justify-between items-center text-xl ">
          <span>{props.title}</span>
          <span className=" text-gray-400 dark:text-gray-300 text-2xl font-semibold">
            {props.icon}
          </span>
        </div>
      </Link>
    </div>
  );
};

const ProfileIcon = () => {
  const { setAuth } = useContext(AuthContext);
  const [open, setOpen] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const user = useCurrentUser();

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth(false);
  };

  return (
    <div className=" relative flex justify-center items-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700">
      <button className=" relative peer flex justify-center items-center w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200">
        <img
          src={
            user && user.profile && user.profile.profilePicture
              ? user.profile.profilePicture
              : constants.profilePlaceholder
          }
          alt="Profile"
          className="w-10 h-10  rounded-full"
        />
      </button>

      <div
        className="absolute -bottom-96 invisible peer-hover:visible hover:visible -left-40 drop-shadow-2xl rounded-md bg-white dark:bg-slate-600 p-4 w-56 h-96 z-10
      peer-focus:visible focus:visible
      "
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <MenuItem to="profile" title="View Profile" icon={<BiUser />} />
            <MenuItem to="profile" title="Drafts" icon={<BiSave />} />
          </div>
          <MenuItem
            onClick={handleOpen}
            to=""
            title="Logout"
            icon={<BiExit />}
          />
        </div>
      </div>
      {open && (
        <LogoutConfirmation open={open} onClose={handleOpen} logout={logout} />
      )}
    </div>
  );
};

export default ProfileIcon;
