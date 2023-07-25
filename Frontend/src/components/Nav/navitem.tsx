import { NavLink } from "react-router-dom";
const NavItem = (props: any) => {
  console.log(props.to);
  return (
    <NavLink to={props.to}>
      <li className=" ml-4 hover:cursor-pointer"> {props.name} </li>
    </NavLink>
  );
};

export default NavItem;
