import { FaRegClock, FaTable } from "react-icons/fa";

const RecipeDetailNumbers = () => {
  return (
    <div className="mb-10 flex text-2xl font-semibold">
      <span
        className="
      border-r-4 border-gray-300
      pr-5
      mr-5
      flex flex-col items-center
      "
      >
        <span className="flex">
          <FaRegClock className="mr-2" />
          <span>Prep Time</span>
        </span>
        <p> 20 mins</p>
      </span>
      <span className="flex flex-col items-center">
        <span className="flex">
          <FaTable className="mr-2" />
          <span>Serving</span>
        </span>
        <p>4</p>
      </span>
    </div>
  );
};

export default RecipeDetailNumbers;
