import { useState } from "react";
import {
  Input,
  TextArea,
  VariableInputs,
  DropDownSelect,
} from "../../../components";
import {
  NewRecipeHeader,
  Steps,
  Description,
  Categories,
  Numbers,
  Ingredients,
  Tags,
} from "./components";

const NewRecipePage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<number>(0);
  const [serving, setServing] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [steps, setSteps] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [nutrition, setNutrition] = useState<{
    calories: number;
    fat: number;
    protein: number;
    carbs: number;
  }>({
    calories: 0,
    fat: 0,
    protein: 0,
    carbs: 0,
  });

  return (
    <div className=" flex flex-col w-full">
      <NewRecipeHeader></NewRecipeHeader>

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
          <Description />
        </div>
        <div className="w-1/2">
          <Ingredients />

          <Categories></Categories>
          <Numbers />
          <Tags />
        </div>
      </div>
      <Steps />
    </div>
  );
};

export default NewRecipePage;
