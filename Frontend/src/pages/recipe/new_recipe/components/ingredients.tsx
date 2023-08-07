import { Fragment, useState } from "react";
import { VariableInputs } from "../../../../components";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleChangeIngredients = (value: string[]) => {
    setIngredients(value);
  };
  return (
    <Fragment>
      <h1 className=" text-3xl font-bold bg-gray-200 p-4">Ingredients</h1>
      <div className="flex flex-wrap">
        <VariableInputs
          title="Ingredient"
          placeholder="Eg: Chicken"
          value={ingredients}
          onChange={handleChangeIngredients}
        />
      </div>
    </Fragment>
  );
};

export default Ingredients;
