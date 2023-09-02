import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

interface Props {
  ingredients: string[];
}

const Ingredients: React.FC<Props> = (props) => {
  return (
    <div className="mb-10">
      <h1 className="mb-5 text-3xl font-bold">Ingredients</h1>
      <ul className="ml-5">
        {props.ingredients.map((ingredient, index) => (
          <li className="mb-3 text-2xl" key={index}>
            <span className="mr-3">
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
