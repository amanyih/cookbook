import { SectionTitle } from "../../../../components";
import { RecipeCard } from "../../../../components";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
const FeaturedSection = () => {
  const { sendRequest: getRecipes } = useHttp();
  const [recipes, setRecipes] = useState<any[]>([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await getRecipes({
        url: "/recipe",
      });
      console.log(recipes);
      setRecipes(recipes["data"]["recipe"]);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <SectionTitle title="Featured Recipes" />
      <div
        className="
        flex
        flex-wrap
        justify-center
        items-center
        gap-10
        w-full
        mb-101
      "
      >
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipe) => <RecipeCard recipe={recipe} />)}
      </div>
    </div>
  );
};

export default FeaturedSection;
