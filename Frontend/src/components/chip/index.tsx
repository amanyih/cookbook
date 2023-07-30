import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { on } from "events";

interface Props {
  name: string;
  onDelete: (name: string) => void;
  dissmisable?: boolean;
}

const Chip: React.FC<Props> = (props) => {
  const onDeleteHandler = () => {
    props.onDelete(props.name);
  };
  return (
    <span
      onClick={onDeleteHandler}
      className="bg-gray-200 px-6 py-2 text-xl rounded-full hover:cursor-pointer hover:bg-gray-300 group mx-1 my-2"
    >
      {props.name}
      <span className={`${props.dissmisable ? "" : "hidden"}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="ml-2 group-hover:text-red-500 "
        ></FontAwesomeIcon>
      </span>
    </span>
  );
};

export default Chip;
