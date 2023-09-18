import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { SectionTitle } from "../../../../../components";
import { useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";

const Ingredients = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  return (
    <div className=" flex flex-col w-full max-w-screen-lg mx-auto px-4 py-8 space-y-8">
      <SectionTitle title="Ingredients" />
      <ul className=" flex flex-col w-full max-w-screen-lg mx-auto px-4 py-8 space-y-8 text-gray-800 dark:text-white">
        {recipe?.ingredients.map((ingredient, index) => (
          <li className=" flex items-center text-lg space-x-2" key={index}>
            <span className=" text-2xl text-primary-400 dark:text-primary-400 mr-2">
              <FontAwesomeIcon icon={faCircle} />
            </span>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
