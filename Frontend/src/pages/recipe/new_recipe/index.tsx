import { FormEvent, useState } from "react";
import { Input } from "../../../components";
import {
  NewRecipeHeader,
  Steps,
  Description,
  Categories,
  Numbers,
  Ingredients,
  Tags,
} from "./components";

import { recipeActions } from "../../../store/recipe";
import { useDispatch } from "react-redux";
import RecipeDto from "../../../types/dtos/recipe.dto";
import useHttp from "../../../hooks/useHttp";

const NewRecipePage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<number>(0);
  const [serving, setServing] = useState<number>(0);
  const [steps, setSteps] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  // const [nutrition, setNutrition] = useState<{
  //   calories: number;
  //   fat: number;
  //   protein: number;
  //   carbs: number;
  // }>({
  //   calories: 0,
  //   fat: 0,
  //   protein: 0,
  //   carbs: 0,
  // });
  const [origin, setOrigin] = useState<string>("");
  const [dishType, setDishType] = useState<string>("");
  const [diet, setDiet] = useState<string>("");
  const [mealType, setMealType] = useState<string>("");

  const dispatch = useDispatch();
  const { sendRequest: createRecipe } = useHttp();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const newRecipe = new RecipeDto(
      title,
      description,
      ingredients,
      origin,
      dishType,
      mealType,
      diet,

      cookingTime,
      serving,
      tags,
      steps
    );

    await createRecipe({
      url: "/recipe",
      body: newRecipe,
      method: "POST",
    });

    dispatch(recipeActions.createRecipe(newRecipe));
  };

  return (
    <div className=" flex flex-col w-full">
      <NewRecipeHeader />

      <div className="w-full flex">
        <div className="w-1/2 mr-5">
          <h1 className=" text-3xl font-bold bg-gray-200 p-4 mb-5">Title</h1>
          <Input
            type="text"
            placeholder="Eg: Chicken Curry"
            value={title}
            className="w-1/2 text-4xl"
            onChange={(value) => {
              setTitle(value.target.value);
            }}
          />
          <Description value={description} onChange={() => {}} />
        </div>
        <div className="w-1/2">
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          <Categories
            diet={diet}
            dishType={dishType}
            origin={origin}
            mealType={mealType}
            setDiet={setDiet}
            setDishType={setDishType}
            setMealType={setMealType}
            setOrigin={setOrigin}
          />
          <Numbers
            cookingTime={cookingTime}
            serving={serving}
            setCookingTime={setCookingTime}
            setServing={setServing}
          />
          <Tags tags={tags} setTags={setTags} />
        </div>
      </div>
      <Steps steps={steps} setSteps={setSteps} />
      <button
        onClick={(event) => submitHandler(event)}
        className="
      bg-red-500
      hover:bg-red-700
     text-white
      font-bold
      py-2
      px-4
      rounded
      "
      >
        Submit
      </button>
    </div>
  );
};

export default NewRecipePage;
