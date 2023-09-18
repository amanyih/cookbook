import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { filterActions } from "../../../../store/filter";

interface FilterItemProps {
  name: string;
  groupName?: string;
  checked: boolean;
}

const FilterItem: React.FC<FilterItemProps> = (props) => {
  const dispatch = useDispatch();
  return (
    <span className=" flex justify-between items-center w-full mb-2 ">
      <input
        type="checkbox"
        id={props.name}
        name={props.groupName ? props.groupName : props.name}
        value={props.name}
        checked={props.checked}
        className=" peer hidden"
        onChange={(value) => {
          if (value.target.checked) {
            dispatch(filterActions.addChip(props.name));
          } else {
            dispatch(filterActions.removeChip(props.name));
          }
        }}
      />
      <label
        htmlFor={props.name}
        className="   flex  justify-between  items-center  w-full  cursor-pointer  transition  duration-200  ease-in-out  hover:bg-gray-200  dark:hover:bg-gray-700  rounded-md  py-2  px-4  text-lg  font-semibold  text-gray-800  dark:text-gray-100  peer-checked:bg-primary-400  peer-checked:text-gray-100  peer-checked:font-bold"
      >
        {props.name}

        <FontAwesomeIcon icon={faCheckCircle} />
      </label>
    </span>
  );
};

export default FilterItem;
