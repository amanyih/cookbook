import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface Props {
  ingredients: string[];
}

const Ingredients: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Ingredients</h1>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>
            <span className="mr-2">
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
