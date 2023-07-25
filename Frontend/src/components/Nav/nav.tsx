import NavItem from "./navitem";
const NavList = () => {
  return (
    <ul className="flex text-navigation font-medium">
      <NavItem name="Home" to="" />
      <NavItem name="About" to="about" />
      <NavItem name="Something" to="something" />
      <NavItem name="Anotherthing" to="anotherthing" />
      <NavItem name="Boom" to="boom" />
    </ul>
  );
};

export default NavList;
