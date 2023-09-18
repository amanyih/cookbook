import { useEffect, useState } from "react";
import { Grid, RecipeCard, RecipeCardSkeleton } from "../../../../components";
import { RecipeListDto } from "../../../../types";
import useHttp from "../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import { getUserLikedRecipes } from "../../../../store/actions";
import { AnyAction } from "redux";

interface LikesSectionProps {
  username: string;
}
const LikesSection = ({ username }: LikesSectionProps) => {
  const { sendRequest: getRecipes } = useHttp();
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector(
    (state: StateInterface) => state.userLikes
  );

  useEffect(() => {
    dispatch(getUserLikedRecipes(getRecipes, username) as unknown as AnyAction);
  }, [username]);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-50 dark:bg-slate-800 px-10 py-10 rounded-md shadow-md">
      {recipes && (
        <Grid
          items={recipes.map((recipe: RecipeListDto) => (
            <RecipeCard recipe={recipe} />
          ))}
        />
      )}
      {loading && (
        <Grid
          items={[1, 2, 3, 4].map((item) => {
            return <RecipeCardSkeleton />;
          })}
        />
      )}
      {!loading && recipes.length === 0 && (
        <div className=" flex flex-col justify-center items-center w-full h-full border-2 mb-3 border-gray-300 rounded-lg dark:border-gray-600 px- py-6">
          <h1 className="text-center text-gray-500">No recipes liked yet!</h1>
        </div>
      )}
    </div>
  );
};

export default LikesSection;
