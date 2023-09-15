import { RecipeCard, Grid, RecipeCardSkeleton } from "../../components";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import { RecipeListDto } from "../../types";

const RecipePage = () => {
  const { sendRequest: getRecipes, data, loading, error } = useHttp();
  const [recipes, setRecipes] = useState<RecipeListDto[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes({
        url: "/recipe",
      });
      //TODO:handle error
      setRecipes(recipes["data"]["recipe"]);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="">
      {!loading && data && (
        <Grid
          items={
            recipes &&
            recipes.map((recipe: RecipeListDto) => {
              return <RecipeCard recipe={recipe} />;
            })
          }
        />
      )}
      {(loading || !recipes) && (
        <Grid items={Array(4).fill(<RecipeCardSkeleton />)} />
      )}
    </div>
  );
};

export default RecipePage;
