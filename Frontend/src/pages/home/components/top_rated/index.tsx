import { SectionTitle, HorizontalScroll } from "../../../../components";
import { RecipeCard } from "../../../../components";
import { useEffect, useState } from "react";
import useHttp from "../../../../hooks/useHttp";
import { RecipeListDto } from "../../../../types";

const TopRated = () => {
  const { sendRequest: getRecipes } = useHttp();
  const [recipes, setRecipes] = useState<RecipeListDto[]>([]);

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
    <div>
      <SectionTitle title="Top Rated" />
      {recipes && recipes.length > 0 && (
        <HorizontalScroll>
          {recipes.map((recipe) => (
            <div className="w-96">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </HorizontalScroll>
      )}
    </div>
  );
};

export default TopRated;
