import { FaRegClock, FaTable } from "react-icons/fa";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";

const RecipeDetailNumbers = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  return (
    <div className=" flex items-center space-y-4 md:space-y-0 md:space-x-8 w-full bg-gray-100 dark:bg-slate-600 p-4 justify-center">
      <span className="flex flex-col items-center mr-4 ">
        <span className="flex items-center mb-2">
          <FaRegClock className="mr-2" />
          <span>Cook Time</span>
        </span>
        <p> {recipe?.cookingTime} mins</p>
      </span>
      <span className="flex flex-col items-center">
        <span className="flex items-center mb-2">
          <FaTable className="mr-2" />
          <span>Serving</span>
        </span>
        <p>{recipe?.serving}</p>
      </span>
    </div>
  );
};

export default RecipeDetailNumbers;
