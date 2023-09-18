import { Fragment, useState } from "react";
import { VariableInputs } from "../../../../../components";
import SectionTitle from "../section_title";

interface props {}

const Ingredients = ({
  ingredients,
  setIngredients,
}: {
  ingredients: string[];
  setIngredients: (value: string[]) => void;
}) => {
  const handleChangeIngredients = (value: string[]) => {
    setIngredients(value);
  };
  return (
    <Fragment>
      <div className=" flex flex-col w-full mb-5  dark:text-gray-100">
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
