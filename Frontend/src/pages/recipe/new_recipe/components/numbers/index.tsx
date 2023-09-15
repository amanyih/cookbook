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
    <div className=" flex flex-col w-full mb-5 dark:bg-gray-900 dark:text-gray ">
      <span className=" text-gray-600 dark:text-gray-400 text-sm mb-3">
        <h1 className=" text-gray-600 dark:text-gray-400 text-sm mb">
          Cooking Time (minutes) <span className="text-red-500">*</span>
        </h1>
        <input
          type="number"
          placeholder="Eg: 30"
          className="  w-full  h-14  px-5 py-3 mb-3  border-2 border-gray-300 rounded-lg  dark:border-gray-600  focus:outline-none focus:border-primary-400  dark:bg-gray-900 dark:text-gray"
          onChange={(value) => {
            setCookingTime(Number(value.target.value));
          }}
          min={5}
          step={5}
          value={`${cookingTime}`}
          required
        />
      </span>
      <span>
        <h1 className=" text-gray-600 dark:text-gray-400 text-sm mb-3 ">
          Serving Size <span className="text-red-500">*</span>
        </h1>
        <input
          required
          type="number"
          placeholder="Eg: 2"
          className=" w-full h-14 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:border-primary-400 dark:bg-gray-900 dark:text-gray-100 "
          min={1}
          step={1}
          onChange={(value) => {
            setServing(Number(value.target.value));
          }}
          value={`${serving}`}
        />
      </span>
    </div>
  );
};

export default Numbers;
