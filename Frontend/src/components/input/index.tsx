interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  id?: string;
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="w-full">
      {props.label && (
        <label
          htmlFor={props.id}
          className="block text-2xl font-medium text-gray-700"
        >
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.id}
        className={`px-4 py-2 text-gray-700 dark:text-whiteish  bg-gray-200 dark:bg-slate-500 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500
        ${props.className}
      `}
      />
    </div>
  );
};

export default Input;
