import {
  SectionTitle,
  RecipeCard,
  Grid,
  RecipeCardSkeleton,
} from "../../../../components";
import { useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import getLatesRecipes from "../../../../store/recipe/latest/actions";
import { AnyAction } from "redux";

const RecentRecipes = () => {
  const { sendRequest: getRecipes } = useHttp();
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector(
    (state: StateInterface) => state.latest
  );

  useEffect(() => {
    dispatch(getLatesRecipes(getRecipes) as unknown as AnyAction);
  }, [dispatch]);
  return (
    <div>
      {recipes && !loading && (
        <div className="mb-10 relative">
          <SectionTitle title="Recent Recipes" />

          <Grid
            items={recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
          />

          <span className="absolute -bottom-10 right-0 mb-5 mr-5 text-xl font-bold  text-primary-300 cursor-pointer">
            <a href="/recipe" className="text-primary-500">
              See More
            </a>
          </span>
        </div>
      )}
      {loading && (
        <Grid
          items={Array(4)
            .fill(4)
            .map((num, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
        />
      )}
    </div>
  );
};

export default RecentRecipes;
