interface ButtonProps {
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined
  ) => void;
  children: React.ReactNode;
  className?: string;
  background?: string;
  textcolor?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type ?? "button"}
      className={`
      ${
        props.disabled
          ? "bg-gray-300 dark:bg-gray-700 text-gray-200 dark:text-gray-100 cursor-not-allowed"
          : props.background
          ? props.background
          : "bg-primary-400 dark:bg-red-500 hover:bg-red-500 dark:hover:bg-primary-400"
      }
      ${
        props.textcolor ?? "dark:text-gray-300 text-gray-200"
      } px-5 py-2 rounded-md transition duration-300 ease-in-out  ${
        props.className
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
