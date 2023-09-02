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
    <div className="w-2/5 mb-5 mr-5 ">
      <label
        htmlFor={props.id}
        className={`block text-xl font-medium text-gray-700 ${props.className}`}
      >
        {props.label}
      </label>
      <select
        name={props.groupClassName}
        className="
        w-2/3 text-xl
        px-4 py-2 text-gray-700 bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500
        "
        id={""}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <option className="w-1/2 text-xl hover:bg-primary-400" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownSelect;
