import { useState } from "react";
import { Input } from "../../../../../components";
import SectionTitle from "../section_title";

const Numbers = ({
  cookingTime,
  setCookingTime,
  serving,
  setServing,
}: {
  cookingTime: number;
  setCookingTime: (value: number) => void;
  serving: number;
  setServing: (value: number) => void;
}) => {
  return (
    <div className="mb-5">
      <SectionTitle title="Numbers" />
      <div className=" ">
        <Input
          type="number"
          placeholder="Eg: 30"
          label="Cooking Time"
          className="w-1/4 text-4xl"
          onChange={(value) => {
            setCookingTime(Number(value.target.value));
          }}
          value={`${cookingTime}`}
        />
        <Input
          type="number"
          placeholder="Eg: 2"
          className="w-1/4 text-4xl"
          label="Serving"
          onChange={(value) => {
            setServing(Number(value.target.value));
          }}
          value={`${serving}`}
        />
      </div>
    </div>
  );
};

export default Numbers;
