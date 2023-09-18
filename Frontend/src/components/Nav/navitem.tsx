import { NavLink } from "react-router-dom";
import { uiActions } from "../../store/actions";
import { useDispatch } from "react-redux";

interface NavItemProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  const dispatch = useDispatch();

  const navLinkStyle = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): string | undefined => {
    const style = "mx-4  hover:cursor-pointer relative text-xl mb-5 nav:mb-0";
    if (isActive) {
      return `${style} after:content-[''] after:absolute after:h-1 after:bg-red-500 after:w-full group`;
    } else {
      return `${style} after:content-[''] after:absolute after:h-1 after:bg-red-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`;
    }
  };

  return (
    <span
      className="flex flex-col justify-center items-center mb-5 nav:mb-0"
      onClick={() => {
        dispatch(uiActions.hideNav());
      }}
    >
      <NavLink className={navLinkStyle} to={props.to}>
        <li className="  flex items-center group">
          {" "}
          {props.name}
          {""} {props.icon}
        </li>
      </NavLink>
    </span>
  );
};

export default NavItem;
