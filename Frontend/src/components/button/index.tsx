interface ButtonProps {
  onClick: () => void;
  isFilled?: boolean;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isRounded?: boolean;
  isSmall?: boolean;
  isMedium?: boolean;
  isLarge?: boolean;
  isExtraLarge?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`
      hover:bg-gray-100
        ${
          props.isDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:cursor-pointer"
        }
        ${props.isFilled ? "bg-primary-400 text-white" : "bg-white"}
        ${props.isOutlined ? "border-2 border-primary-400" : ""}
        ${props.isRounded ? "rounded-full" : "rounded-md"}
        ${props.isSmall ? "px-4 py-2 text-sm" : ""}
        ${props.isMedium ? "px-6 py-3 text-base" : ""}
        ${props.isLarge ? "px-8 py-4 text-lg" : ""}
        ${props.isExtraLarge ? "px-10 py-3 text-3xl" : ""}
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
};

export default Button;
