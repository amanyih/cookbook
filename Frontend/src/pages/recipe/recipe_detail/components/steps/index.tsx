import { useSelector } from "react-redux";
import { SectionTitle } from "../../../../../components";
import { StateInterface } from "../../../../../store";
interface Step {
  title: string;
  description: string;
}

const Steps = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  return (
    <div className=" flex flex-col w-full max-w-screen-lg mx-auto px-4 py-8 space-y-8 mb-20">
      <SectionTitle title="Steps" />
      <ul>
        {recipe?.steps.map((step, index) => (
          <li
            key={index}
            className=" flex flex-col space-y-4 text-gray-800 dark:text-white mb-4"
          >
            <div className=" flex items-center space-x-2 text-xl font-semibold text-gray-800">
              <span className=" text-primary-400 dark:text-primary-400 text-2xl">
                {index + 1}.
              </span>
              <span className=" text-gray-800 dark:text-white text-xl font-semibold">
                {step.title}
              </span>
            </div>
            <p className=" text-gray-800 dark:text-white text-lg ">
              {step.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
