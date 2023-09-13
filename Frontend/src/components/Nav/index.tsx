import Logo from "../logo";
import ProfileIcon from "../Profile";
import NavList from "./nav";
import ThemeToggle from "../ThemeToggle";
import { useContext } from "react";
import { AuthContext } from "../../store/context";

const NavBar = () => {
  const { auth } = useContext(AuthContext);
  console.log(auth, "auth");
  return (
    <div className="w-full flex justify-between items-center mb-20 mt-3 border-b-red-400 ">
      <Logo />
      <NavList />
      <div className="flex">
        <ThemeToggle />
        {auth && <ProfileIcon />}
        {!auth && (
          <a href="/register" className="text-primary-400">
            Login
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
