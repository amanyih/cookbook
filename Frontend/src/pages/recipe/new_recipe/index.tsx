import { FormEvent, useState, useRef } from "react";
import { Input, Button } from "../../../components";
import {
  NewRecipeHeader,
  Steps,
  Description,
  Categories,
  Numbers,
  Ingredients,
  Tags,
  SectionTitle,
} from "./components";

import { recipeActions } from "../../../store/recipe";
import { useDispatch } from "react-redux";
import RecipeDto from "../../../types/dtos/recipe.dto";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";

const NewRecipePage = () => {
  const {
    value: title,
    errorMessage,
    onChange: titleOnChange,
  } = useInput("", (value) => value !== "");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [diet, setDiet] = useState<string>("");
  const [dishType, setDishType] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [mealType, setMealType] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<number>(0);
  const [serving, setServing] = useState<number>(0);
  const [tags, setTags] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([]);
  const [stepDescription, setStepDescription] = useState<string[]>([]);

  const { sendRequest: createRecipe } = useHttp();

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const step: { title: string; description: string }[] = [];
    for (let i = 0; i < steps.length; i++) {
      step.push({
        title: steps[i],
        description: stepDescription[i],
      });
    }
    const recipe: RecipeDto = new RecipeDto(
      title,
      description,
      ingredients,
      origin,
      diet,
      dishType,
      mealType,
      cookingTime,
      serving,
      tags,
      step
    );

    const response = await createRecipe({
      url: "/recipe",
      method: "POST",
      body: recipe,
    });

    if (response.status === "success") {
      //navigate to recipe page
      window.location.href = `/recipe/`;
    }
  };

  return (
    <div className=" flex flex-col w-full">
      <NewRecipeHeader />
      <form action="" onSubmit={submitHandler}>
        <div className="flex">
          <div className="mr-5 w-1/2">
            <SectionTitle title="Title" />
            <Input
              type="text"
              placeholder="Eg: Chicken Curry"
              value={title}
              className="w-1/2 text-4xl"
              onChange={titleOnChange}
            />
            <Description
              value={description}
              onChange={(event: any) => setDescription(event.target.value)}
            />
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
        <Steps
          steps={steps}
          setSteps={setSteps}
          stepDescription={stepDescription}
          setStepDescription={setStepDescription}
        />

        <input
          className="bg-red-500
      hover:bg-red-700
     text-white
      font-bold
      py-6
      px-8
      text-2xl
      rounded-3xl
      w-full
      
      "
          type="submit"
        />
      </form>
    </div>
  );
};

export default NewRecipePage;
