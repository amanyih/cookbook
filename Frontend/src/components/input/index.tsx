import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Rquired from "../required";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  placeholder?: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  autoComplete?: string;
  label?: string;
  required?: boolean;
  outline?: boolean;
  rounded?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  error,
  errorMessage,
  className,
  autoComplete,
  label,
  required,
  outline,
  rounded,
  min,
  max,
  step,
  maxLength,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <span className="relative mb-2 w-full flex flex-col justify-center items-center">
      {label && (
        <label
          className="text-gray-700 dark:text-gray-50 text-sm mb-2 w-full flex items-center"
          htmlFor={label}
        >
          <span className=" text-gray-700 dark:text-gray-50 text-sm">
            {label}
          </span>
          {required && <Rquired />}
        </label>
      )}

      <span className="w-full flex items-center relative">
        <input
          id={label}
          required={required}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={` border-gray-300 focus:outline-none focus:border-primary-400 w-full dark:border-gray-600 dark:focus:border-red-500 dark:bg-gray-700 dark:text-gray-100 transition duration-300 ease-in-out px-5 
          py-3  ${outline ? "border-2" : "border-b-2"}
          ${error && "border-red-500"}
          ${rounded && "rounded-lg"}
            ${className}`}
          type={type === "password" ? (isVisible ? "text" : "password") : type}
          placeholder={placeholder}
          min={min}
          max={max}
          maxLength={maxLength}
          step={step}
        />
        {type == "password" && (
          <span
            className="text-xl font-bold text-primary-400 cursor-pointer dark:text-red-500 absolute top-3 right-3"
            onClick={handlePasswordVisibility}
          >
            {isVisible ? <BsEyeSlash /> : <BsEye />}
          </span>
        )}
      </span>

      <p>
        {error && <span className=" text-red-500 text-sm">{errorMessage}</span>}
      </p>
    </span>
  );
};

export default Input;
