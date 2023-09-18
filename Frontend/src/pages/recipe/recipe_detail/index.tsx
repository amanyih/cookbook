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
import { getRecipeDetailAction } from "../../../store/actions";

import { useParams } from "react-router";
import { useEffect } from "react";
import useHttp from "../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../store";
import { AnyAction } from "redux";

const RecipeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { loading, recipe } = useSelector(
    (state: StateInterface) => state.recipeDetail
  );
  const { sendRequest: getRecipe } = useHttp();

  useEffect(() => {
    dispatch(getRecipeDetailAction(getRecipe, id!) as unknown as AnyAction);
  }, [id]);

  return (
    <div>
      {!loading && recipe && (
        <div className=" flex flex-col w-full max-w-screen-lg mx-auto px-4 space-y-8 lg:px-0 items-center">
          <RecipeDetailHeader />
          <RecipeDetailNumbers />
          <div className="flex flex-col-reverse justify-between w-full items-center space-x-4 md:flex-row md:space-x-4 lg:items-start lg:space-x-8">
            <Ingredients />

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
          <Steps />
          <RateRecipe />
          <Comments />
        </div>
      )}
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default RecipeDetail;
