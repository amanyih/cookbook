interface DropDownSelectProps {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  name?: string;
  id: string;
  label?: string;
  error?: string;
  groupClassName: string;
}

const DropDownSelect: React.FC<DropDownSelectProps> = (props) => {
  return (
    <div className="flex flex-col w-full mb-5 dark:bg-gray-900 dark:text-gray-100">
      <label
        htmlFor={props.id}
        className={` text-gray-600 dark:text-gray-400 text-sm mb-3 ${props.className}`}
      >
        {props.label}
      </label>
      <select
        required
        name={props.groupClassName}
        className=" w-full h-14 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:border-primary-400 dark:bg-gray-900 dark:text-gray-100"
        id={""}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <option
            className=" w-full h-14 text-gray-600 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:border-primary-400 hover:bg-gray-100
 dark:bg-gray-900"
            value={option}
            selected={option === props.value}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownSelect;
