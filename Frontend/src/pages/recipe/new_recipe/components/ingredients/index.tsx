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
      <SectionTitle title="Ingredients" />
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
