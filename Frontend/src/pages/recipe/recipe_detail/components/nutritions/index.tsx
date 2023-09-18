import { useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";

interface Nutrition {
  title: string;
  amount: number;
}

interface NutritionsProps {
  nutritions: Nutrition[];
}

const Nutritions: React.FC<NutritionsProps> = (props) => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  return (
    <div className=" flex flex-col max-w-screen-lg mx-auto px-6 py-8 bg-gray-200 rounded-lg space-y-8 dark:bg-slate-600">
      <h1 className=" text-xl font-bold text-gray-800 dark:text-white">
        Nutrition
      </h1>
      <ul>
        {props.nutritions.map((nutrition, index) => (
          <li
            key={index}
            className="flex items-center text-lg space-x-2 text-gray-800 dark:text-white"
          >
            <span className=" text-base text-primary-400 dark:text-primary-400 mr-2 flex">
              {nutrition.title}
            </span>
            <span className=" text-xl text-gray-800 dark:text-white">
              {nutrition.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nutritions;
