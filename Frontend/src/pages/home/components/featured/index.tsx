import {
  SectionTitle,
  Grid,
  CategoryCardSkeleton,
} from "../../../../components";
import { RecipeCard } from "../../../../components";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
import { RecipeListDto } from "../../../../types";
const FeaturedSection = () => {
  const { loading, error, sendRequest: getRecipes, data } = useHttp();
  const [recipes, setRecipes] = useState<RecipeListDto[]>([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes({
        url: "/recipe",
      });
      if (data && !error) {
        console.log("Not error in featured section");
        setRecipes(recipes["data"]["recipe"]);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-col mb-10">
      {recipes && !loading && (
        <div>
          <SectionTitle title="Featured Recipes" />
          {recipes.length > 0 && (
            <Grid
              items={recipes.map((recipe) => (
                <RecipeCard recipe={recipe} />
              ))}
            />
          )}
        </div>
      )}
      {loading && <Grid items={Array(4).fill(<CategoryCardSkeleton />)} />}
    </div>
  );
};

export default FeaturedSection;
