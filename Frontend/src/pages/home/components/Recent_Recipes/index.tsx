import {
  SectionTitle,
  RecipeCard,
  Grid,
  RecipeCardSkeleton,
} from "../../../../components";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
import { RecipeListDto } from "../../../../types";

const RecentRecipes = () => {
  const { sendRequest: getRecipes, data, error, loading } = useHttp();
  const [recipes, setRecipes] = useState<RecipeListDto[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes({
        url: "/recipe",
      });

      if (data && !error) {
        setRecipes(recipes["data"]["recipe"]);
      }
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      {recipes && !loading && (
        <div className="mb-10 relative">
          <SectionTitle title="Recent Recipes" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe} />;
            })}
          </div>

          <span className="absolute bottom-0 right-0 mb-5 mr-5 text-xl font-bold  text-primary-300 cursor-pointer">
            <a href="/recipe" className="text-primary-500">
              See More
            </a>
          </span>
        </div>
      )}
      {loading && <Grid items={Array(4).fill(<RecipeCardSkeleton />)} />}
    </div>
  );
};

export default RecentRecipes;
