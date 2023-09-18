import Rquired from "../required";

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | undefined) => void;
  placeholder?: string;
  cols?: number;
  rows?: number;
  className?: string;
  autoComplete?: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  resize?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  cols,
  rows,
  className,
  autoComplete,
  label,
  required,
  error,
  errorMessage,
  resize,
  outline,
  rounded,
}) => {
  return (
    <span className="relative mb-2 w-full flex flex-col justify-center items-start">
      {label && (
        <label
          className="text-gray-700 dark:text-gray-50 text-sm mb-2"
          htmlFor=""
        >
          <span className=" text-gray-700 dark:text-gray-50 text-sm">
            {label}
          </span>
          {required && <Rquired />}
        </label>
      )}
      <span className="w-full flex items-center">
        <textarea
          required={required}
          className={`  border-gray-300 dark:border-gray-600 focus:outline-none focus:border-primary-400 w-full mb-5 p-2 dark:bg-gray-700 resize-none px-5 py-3 ${className} 
            ${error && "border-red-500 dark:border-red-400"}
            ${!resize && "resize-none"}
            ${rounded && "rounded-lg"}
            ${outline ? "border-2" : "border-b-2"}

            `}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          cols={cols ?? 30}
          rows={rows ?? 10}
        />
        <p>
          {error && (
            <span className=" text-red-500 text-sm">{errorMessage}</span>
          )}
        </p>
      </span>
    </span>
  );
};

export default TextArea;
