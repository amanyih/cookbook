import { useState } from "react";
import Tabs from ".././tabs";
import { Outlet, useParams } from "react-router";
import routes from "../../../../router/route";
import { CommentsSection, LikesSection, RecipesSection } from "../../sections";

const UserActivity = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { username } = useParams() as { username: string };
  const tabsection = [
    <RecipesSection username={username} />,
    <CommentsSection username={username} />,
    <LikesSection username={username} />,
  ];
  const tabs = [
    {
      name: "Recipes",
      to: "",
    },
    {
      name: "Comments",
      to: "user-comment",
    },
    {
      name: "Likes",
      to: "user-likes",
    },
  ];

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-50 dark:bg-slate-800 px-10 py-10 rounded-md shadow-md">
      <Tabs tabs={tabs} activeTab={activeTab} changeTab={changeTab} />
      {tabsection[activeTab]}
    </div>
  );
};

export default UserActivity;
