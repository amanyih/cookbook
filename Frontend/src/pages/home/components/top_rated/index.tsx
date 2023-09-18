import {
  SectionTitle,
  HorizontalScroll,
  RecipeCardSkeleton,
} from "../../../../components";
import { RecipeCard } from "../../../../components";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
import { RecipeListDto } from "../../../../types";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import getTopActions from "../../../../store/recipe/top/actions";
import { AnyAction } from "redux";

const TopRated = () => {
  const { sendRequest: getRecipes } = useHttp();
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector(
    (state: StateInterface) => state.top
  );

  useEffect(() => {
    dispatch(getTopActions(getRecipes) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div>
      {(loading || recipes.length > 0) && <SectionTitle title="Top Rated" />}
      {!loading && (
        <HorizontalScroll>
          {recipes.map((recipe) => (
            <div className="w-96">
              <RecipeCard key={recipe.id} recipe={recipe} />
            </div>
          ))}
        </HorizontalScroll>
      )}
      {loading && (
        <HorizontalScroll>
          {Array(4).map((item) => (
            <RecipeCardSkeleton />
          ))}
        </HorizontalScroll>
      )}
    </div>
  );
};

export default TopRated;
