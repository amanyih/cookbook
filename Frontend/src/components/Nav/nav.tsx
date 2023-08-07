import NavItem from "./navitem";
import SearchBar from "./searchbar";
import Routes from "../../router/route";
const NavList = () => {
  return (
    <ul className="flex">
      <NavItem name="Home" to={Routes.HOME} />
      <NavItem name="Categories" to={Routes.CATEGORIES} />
      <NavItem name="Recipe" to={Routes.RECIPEPAGE} />
      <NavItem name="About" to={Routes.ABOUT} />
      <NavItem name="Explore" to={Routes.SEARCH} icon={<SearchBar />} />
    </ul>
  );
};

export default NavList;
