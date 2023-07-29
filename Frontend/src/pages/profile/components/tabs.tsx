import { useState } from "react";
import { NavLink } from "react-router-dom";

interface LinkProps {
  name: string;
  to: string;
}

interface TabsProps {
  tabs: LinkProps[];
  activeTab: number;
  changeTab: (index: number) => void;
}
const navLinkStyle = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}): string | undefined => {
  const style =
    "mx-4 hover:cursor-pointer relative text-2xl w-fit block py-4 px-8 transition-all duration-500 ease-in-out";

  if (isActive) {
    return `${style} " border-b-8 border-primary-300 "`;
  } else {
    return `${style} hover:bg-gray-200 `;
  }
};

const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className="w-full justify-center flex group hover:cursor-pointer ">
      {props.tabs.map((tab, index) => {
        return (
          <NavLink
            key={index}
            to={tab.to}
            onClick={() => props.changeTab(index)}
            className={navLinkStyle}
            end
          >
            {tab.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Tabs;
