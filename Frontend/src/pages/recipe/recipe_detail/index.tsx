import {
  RecipeDetailHeader,
  RecipeDetailNumbers,
  Ingredients,
  Steps,
  Nutritions,
  Comments,
  RateRecipe,
} from "./components";
import { LoadingSpinner } from "../../../components";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";
import { RecipeDto } from "../../../types";
import { DateFormat } from "../../../util";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { sendRequest: getRecipe } = useHttp();
  const [recipe, setRecipe] = useState<RecipeDto>();

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipe = await getRecipe({
        url: `/recipe/${id}`,
      });
      setRecipe(recipe["data"]["recipe"]);
    };
    fetchRecipe();
  }, [id]);

  return (
    <div>
      {recipe && (
        <div className="flex flex-col justify-center items-center">
          <RecipeDetailHeader
            author={recipe.author}
            comments={recipe.comments.length}
            date={DateFormat(new Date(recipe.createdAt))}
            description={recipe.description}
            imgae={recipe.image}
            tags={recipe.tags}
            isLiked={recipe.isLiked}
            rating={recipe.ratings.length}
            title={recipe.title}
          />
          <RecipeDetailNumbers
            cookTime={recipe.cookingTime}
            serving={recipe.serving}
          />
          <div className="flex justify-between w-full">
            <div>
              <Ingredients ingredients={recipe.ingredients} />
            </div>
            <div>
              <Nutritions
                nutritions={[
                  {
                    title: "Calories",
                    amount: 452,
                  },
                  {
                    title: "Fat",
                    amount: 12,
                  },
                  {
                    title: "Protein",
                    amount: 12,
                  },
                  {
                    title: "Carbohydrates",
                    amount: 12,
                  },
                ]}
              />
            </div>
          </div>
          <Steps steps={recipe.steps} />
          <RateRecipe id={recipe.id} />
          <Comments comments={recipe.comments} recipeId={recipe.id} />
        </div>
      )}
      {!recipe && <LoadingSpinner />}
    </div>
  );
};

export default RecipeDetail;
