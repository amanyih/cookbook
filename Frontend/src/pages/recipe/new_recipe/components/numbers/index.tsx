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
    <div className=" flex flex-col w-full mb-5  dark:text-gray ">
      <span className=" text-gray-600 dark:text-gray-400 text-sm mb-3">
        <h1 className=" text-gray-600 dark:text-gray-400 text-sm mb">
          Cooking Time (minutes) <span className="text-red-500">*</span>
        </h1>
        <Input
          value={`${cookingTime}`}
          onChange={(value) => {
            setCookingTime(Number(value!.target.value));
          }}
          type="number"
          placeholder="Eg: 30"
          required={true}
          rounded={true}
          outline={true}
          className="h-14"
          min={5}
          step={5}
        />
      </span>
      <span>
        <h1 className=" text-gray-600 dark:text-gray-400 text-sm mb-3 ">
          Serving Size <span className="text-red-500">*</span>
        </h1>
        <Input
          value={`${serving}`}
          onChange={(value) => {
            setServing(Number(value!.target.value));
          }}
          type="number"
          placeholder="Eg: 30"
          required={true}
          rounded={true}
          outline={true}
          className="h-14"
          min={1}
          step={1}
        />
      </span>
    </div>
  );
};

export default Numbers;
