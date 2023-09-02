import { NavLink } from "react-router-dom";

interface NavItemProps {
  name: string;
  to: string;
  icon?: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = (props) => {
  console.log(props.to);

  const navLinkStyle = ({
    isActive,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): string | undefined => {
    const style = "mx-4 font-semibold hover:cursor-pointer relative text-xl";
    if (isActive) {
      return `${style} after:content-[''] after:absolute after:h-1 after:bg-red-500 after:w-full group`;
    } else {
      return `${style} after:content-[''] after:absolute after:h-1 after:bg-red-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`;
    }
  };

  return (
    <NavLink className={navLinkStyle} to={props.to}>
      <div className="flex">
        <li className=""> {props.name} </li>
        {props.icon}
      </div>
    </NavLink>
  );
};

export default NavItem;
