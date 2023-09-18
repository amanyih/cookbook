import Logo from "../logo";
import ProfileIcon from "../Profile";
import ThemeToggle from "../ThemeToggle";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/context";
import Button from "../button";
import { VscListFlat, VscClose } from "react-icons/vsc";
import NavItem from "./navitem";
import Routes from "../../router/route";
import SearchBar from "./searchbar";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../store";
import { uiActions } from "../../store/ui";

const NavBar = () => {
  const { show } = useSelector((state: StateInterface) => state.ui.nav);
  const dispatch = useDispatch();

  const { auth } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center mb-20 mt-3 w-full">
      <Logo />
      <ul
        id="nav"
        className={` ${
          show ? "hidden" : ""
        } nav:flex space-x-4 text-gray-500 dark:text-gray-200 text-sm font-semibold animated slideDown absolute nav:static top-14 right-0 z-50 bg-white dark:bg-gray-800
        nav:bg-transparent nav:dark:bg-transparent px-10 nav:px-0 py-5 nav:py-0  nav:flex-row shadow-md nav:shadow-none rounded-b-nav
        items-center justify-center nav:justify-start
        `}
      >
        <NavItem name="Home" to={Routes.HOME} />
        <NavItem name="Categories" to={Routes.CATEGORIES} />
        <NavItem name="Recipe" to={Routes.RECIPEPAGE} />
        <NavItem name="Explore" to={Routes.SEARCH} icon={<SearchBar />} />
        <NavItem name="About" to={Routes.ABOUT} />
        <span className="flex items-center space-x-2 nav:space-x-4 text-gray-500 dark:text-gray-200 text-sm font-semibold flex-col nav:flex-row space-y-4 nav:space-y-0">
          <ThemeToggle />
          {auth && <ProfileIcon />}
          {!auth && (
            <a href="/register">
              <Button>Login / Signup</Button>
            </a>
          )}
        </span>
      </ul>
      <button
        className="nav:hidden 
        hover:text-primary-400
        text-gray-500 dark:text-gray-200 font-semibold
        cursor-pointer text-3xl"
        onClick={() => {
          dispatch(uiActions.toggleNav());
        }}
      >
        {show ? <VscListFlat /> : <VscClose />}
      </button>
    </div>
  );
};

export default NavBar;
