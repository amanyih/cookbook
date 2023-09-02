import Logo from "../logo";
import ProfileIcon from "../Profile";
import NavList from "./nav";
import ThemeToggle from "../ThemeToggle";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center mb-20 mt-3 border-b-red-400 ">
      <Logo />
      <NavList />
      <div className="flex">
        <ThemeToggle />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default NavBar;
