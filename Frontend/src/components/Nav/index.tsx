import Logo from "../logo";
import ProfileIcon from "../Profile";
import NavList from "./nav";
import ThemeToggle from "../ThemeToggle";
import { useContext } from "react";
import { AuthContext } from "../../store/context";
import Button from "../button";

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
          <a href="/register">
            <Button
              className="bg-primary-400 py-2 px-6   text-black"
              onClick={() => console.log("hello")}
              isRounded={true}
              isMedium={true}
              isOutlined={true}
            >
              Login / Signup
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default NavBar;
