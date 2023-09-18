import { RecipeCard, Grid, RecipeCardSkeleton } from "../../components";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import { RecipeListDto } from "../../types";
import { getRecipes } from "../../store/actions";
import { StateInterface } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { AnyAction } from "redux";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { sendRequest: fetchRecipes } = useHttp();
  const { recipes, loading } = useSelector(
    (state: StateInterface) => state.recipe
  );

  useEffect(() => {
    dispatch(getRecipes(fetchRecipes) as unknown as AnyAction);
  }, [dispatch]);

  return (
    <div className="">
      {!loading && (
        <Grid
          items={recipes.map((recipe: RecipeListDto) => {
            return <RecipeCard recipe={recipe} />;
          })}
        />
      )}
      {loading && <Grid items={Array(4).fill(<RecipeCardSkeleton />)} />}
    </div>
  );
};

export default RecipePage;
