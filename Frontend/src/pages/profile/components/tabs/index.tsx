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
    "px-5 py-3 mb-5 rounded-lg transition duration-300 ease-in-out text-xl font-semibold";

  if (isActive) {
    return `${style} " 
    border-b-2 border-primary-400 text-primary-400 dark:text-primary-400 dark:border-primary-400"`;
  } else {
    return `${style} text-gray-400 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-800" `;
  }
};

const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className=" flex justify-center items-center w-full bg-gray-50 dark:bg-slate-800 px-10 py-10 mb-10 rounded-md shadow-md">
      {props.tabs.map((tab, index) => {
        return (
          <button
            key={index}
            onClick={() => props.changeTab(index)}
            className={`${navLinkStyle({
              isActive: props.activeTab === index,
              isPending: false,
            })}`}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
