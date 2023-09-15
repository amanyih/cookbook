import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="w-full rounded-lg mb-5">
      <div
        className={` flex justify-between items-center dark:border-gray-50 border-b-2 border-gray-200 py-5 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 ease-in-out px-5 mb-5
        ${open ? "rounded-t-lg bg-gray-100 border-primary-400" : "rounded-lg"}
        `}
        onClick={handleOpen}
        role="button"
        tabIndex={0}
      >
        <h1 className=" text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
          {title}
        </h1>
        <div className="cursor-pointer">
          {open ? (
            <BiChevronUp
              className=" text-3xl text-gray-800 dark:text-gray-50 mb-5
                "
            />
          ) : (
            <BiChevronDown
              className=" text-3xl text-gray-800 dark:text-gray-50 mb-5
                "
            />
          )}
        </div>
      </div>
      <p
        className={` ${
          open ? "block" : "hidden"
        } text-gray-700 dark:text-gray-50 text-lg px-5 transition duration- ease-in-out`}
      >
        {description}
      </p>
    </div>
  );
};

export default Accordion;
