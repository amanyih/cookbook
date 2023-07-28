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
    isPending,
  }: {
    isActive: boolean;
    isPending: boolean;
  }): string | undefined => {
    const style = "mx-4 hover:cursor-pointer relative text-xl w-fit block";
    if (isActive) {
      return `${style} text-red-500 font-bold group`;
    } else {
      return `${style} after:content-[''] after:absolute after:h-[3px] after:bg-red-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left`;
    }

    return style;
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
