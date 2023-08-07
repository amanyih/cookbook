import { useState } from "react";
import { Input } from "../../../../components";

const Numbers = () => {
  const [cookingTime, setCookingTime] = useState<number>(0);
  const [serving, setServing] = useState<number>(0);

  return (
    <div className="mb-5">
      <h1 className=" text-3xl font-bold bg-gray-200 p-4 mb-5">Numbers</h1>
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
