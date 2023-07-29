import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

interface FilterItemProps {
  name: string;
  groupName?: string;
}

const FilterItem: React.FC<FilterItemProps> = (props) => {
  return (
    <span className="mb-3 text-2xl">
      <input
        type="checkbox"
        id={props.name}
        name={props.groupName ? props.groupName : props.name}
        value=""
        className="hidden peer"
      />
      <label
        htmlFor={props.name}
        className=" inline-flex font-bold justify-between px-6 py-4 w-5/6 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:bg-primary-400  peer-checked:text-gray-200 hover:text-gray-600 hover:bg-gray-200 
        transition-all duration-500 ease-in-out
        
        "
      >
        {props.name}

        <FontAwesomeIcon icon={faCheckCircle} />
      </label>
    </span>
  );
};

export default FilterItem;
