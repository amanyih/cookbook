import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const RecipeDetailNumbers = () => {
  return (
    <div className="flex">
      <span
        className="
      border-r-2 border-gray-300
      pr-5
      mr-5
      flex flex-col items-center
      "
      >
        <span>
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>Prep Time</span>
        </span>
        <p> 20 mins</p>
      </span>
      <span className="flex flex-col items-center">
        <span>
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          <span>Serving</span>
        </span>
        <p>4</p>
      </span>
    </div>
  );
};

export default RecipeDetailNumbers;
