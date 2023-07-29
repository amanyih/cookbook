import { useState } from "react";
import Tabs from "./tabs";
import { Outlet } from "react-router";
import routes from "../../../router/route";

const UserActivity = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Recipes",
      to: "",
    },
    {
      name: "Comments",
      to: routes.USER_COMMENT,
    },
    {
      name: "Likes",
      to: routes.USER_LIKES,
    },
  ];

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-4/5">
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
      <Outlet />
    </div>
  );
};

export default UserActivity;
