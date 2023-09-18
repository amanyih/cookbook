import {
  SectionTitle,
  Grid,
  CategoryCardSkeleton,
} from "../../../../components";
import { RecipeCard } from "../../../../components";
import { useEffect } from "react";
import useHttp from "../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../store";
import { getFeaturedRecipes } from "../../../../store/actions";
import { AnyAction } from "redux";
const FeaturedSection = () => {
  const { sendRequest: getRecipes } = useHttp();
  const dispatch = useDispatch();
  const { recipes, error, loading } = useSelector(
    (state: StateInterface) => state.featured
  );
  useEffect(() => {
    dispatch(getFeaturedRecipes(getRecipes) as unknown as AnyAction);
  }, []);

  return (
    <div className="flex flex-col mb-10">
      {recipes && !loading && (
        <div>
          <SectionTitle title="Featured Recipes" />
          {recipes.length > 0 && (
            <Grid
              items={recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            />
          )}
        </div>
      )}
      {loading && (
        <Grid
          items={Array(4)
            .fill(4)
            .map((num, index) => {
              return <CategoryCardSkeleton key={index} />;
            })}
        />
      )}
    </div>
  );
};

export default FeaturedSection;
