import Logo from "./logo";
import SearchBar from "./searchbar";
import ProfileIcon from "../Profile";
import NavList from "./nav";
const NavBar = () => {
  return (
    <div className="flex justify-between w-full items-center mb-20">
      <Logo />
      <NavList />
      <div className="flex">
        <SearchBar />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default NavBar;
