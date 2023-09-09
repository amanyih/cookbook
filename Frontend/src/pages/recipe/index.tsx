import { RecipeCard } from "../../components";
import useHttp from "../../hooks/useHttp";
import { useEffect, useState } from "react";
import Recipe from "../../types/models/recipe";

const RecipePage = () => {
  const { sendRequest: getRecipes } = useHttp();
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes({
        url: "/recipe",
      });
      setRecipes(recipes["data"]["recipe"]);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-wrap">
      {recipes.map((recipe: Recipe) => {
        return <RecipeCard recipe={recipe} />;
      })}
    </div>
  );
};

export default RecipePage;
