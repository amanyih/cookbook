import { BsGraphUp, BsShare, BsHeart, BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import { Chip } from "../../../../../components";
import { Rating } from "../../../../../components";
import useHttp from "../../../../../hooks/useHttp";
import constants from "../../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";
import { DateFormat } from "../../../../../util";
import {
  likeRecipe as likeRecipeAction,
  uiActions,
} from "../../../../../store/actions";
import { AnyAction } from "redux";

const RecipeDetailHeader = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  const [liked, setLiked] = useState<boolean>(recipe?.isLiked ?? false);
  const dispatch = useDispatch();

  const { sendRequest: likeRecipe } = useHttp();

  const likeRecipeHandler = async () => {
    dispatch(likeRecipeAction(likeRecipe, recipe?.id!) as unknown as AnyAction);
  };

  //copy to clipboard
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    dispatch(
      uiActions.showNotification({
        success: true,
        title: " Link copied to clipboard",
        message: "Share it with your friends",
      })
    );
  };

  const toggleLike = async () => {
    setLiked((prev) => !prev);
    await likeRecipeHandler();
  };

  return (
    <div className=" flex flex-col w-full max-w-screen-lg mx-auto px-4 py-8 space-y-8">
      <div className=" flex justify-between w-full items-center space-x-4">
        <span className=" flex items-center text-lg space-x-2 ">
          <BsGraphUp className="mr-5" /> <span>85% would make this again</span>
        </span>
        <span className=" flex items-center text-3xl space-x-2 ">
          <BsShare
            className="mx-10 cursor-pointer hover:text-primary-400 transition duration-200 ease-in-out font-bold focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            onClick={handleShare}
          />
          <span onClick={toggleLike} className="hover:cursor-pointer">
            {!liked && <BsHeart />}
            {liked && <BsHeartFill className="text-primary-400" />}
          </span>
        </span>
      </div>
      <h1 className=" text-4xl font-bold ">{recipe?.title}</h1>

      <div
        className=" flex flex-col items-center space-x-2  gap-4 md:flex-row md:space-x-4 lg:items-start lg:space-x-8 
      justify-between
      border-b-2 border-gray-200 dark:border-gray-800 pb-4 
      "
      >
        <a
          href={`/profile/${recipe?.author.username}`}
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = `/profile/${recipe?.author.username}`;
          }}
        >
          <span className=" flex items-center space-x-2 ">
            <span className=" flex items-center justify-center h-10 w-10 rounded-full bg-primary-700">
              <img
                src={
                  recipe?.author.profile.profilePicture ??
                  constants.profilePlaceholder
                }
                className="  h-10 w-10 rounded-full object-cover "
                alt=""
              />
            </span>
            <span className="text-xl font-bold text-primary-700 dark:text-primary-700">
              {recipe?.author.profile.name}
            </span>
          </span>
        </a>

        <span className="invisible md:visible h-0 md:h-auto text-2xl text-primary-400 dark:text-primary-400 mr-2">
          |
        </span>

        <span className=" ml-2 text-lg">
          {DateFormat(new Date(recipe?.createdAt!))}
        </span>

        <span className=" invisible md:visible h-0 md:h-auto  text-2xl text-primary-400 dark:text-primary-400 mr-2">
          |
        </span>

        <span className="flex items-center space-x-2">
          {recipe?.comments.length} Comments
        </span>

        <Rating rating={recipe?.ratings.length!} half={false} />
      </div>
      <div className="mb-10 flex flex-col items-center">
        <p className="mb-5 text-lg">{recipe?.description}</p>
        <div className="mb-5 w-full flex flex-wrap">
          {recipe?.tags.map((tag) => (
            <Chip key={tag} name={tag} onDelete={() => {}} />
          ))}
        </div>
        <img
          src={recipe?.image}
          className=" w-full max-w-screen-lg mx-auto object-cover rounded-lg shadow-lg"
          alt=""
        />
      </div>
    </div>
  );
};

export default RecipeDetailHeader;
