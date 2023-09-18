import { useSelector } from "react-redux";
import FilterItem from "./filterItem";
import { StateInterface } from "../../../../store";
import { BsFilterRight } from "react-icons/bs";
import { useState } from "react";

interface FilterSectionProps {
  title: string;
  list: string[];
}

const FilterSection: React.FC<FilterSectionProps> = (props) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];

  return (
    <div className=" flex flex-col justify-start items-start md:items-center w-full mb-10 md:mb-0 md:mr-10">
      <h1 className=" text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5 pl-10 border-l-4 border-gray-800 dark:border-gray-50 flex justify-between items-center w-full">
        {props.title}
        <span
          className="  md:hidden  flex  hover:bg-gray-200  dark:hover:bg-gray-700  rounded-md py-2 px-4 text-lg font-semibold cursor-pointer text-gray-800 "
          onClick={toggleFilter}
        >
          <BsFilterRight className="text-3xl text-gray-800 dark:text-gray-50 mb-5" />
        </span>
      </h1>

      <div
        className={`
          ${
            showFilter ? "block" : "hidden"
          } md:flex flex-wrap justify-start items-center gap-x-2 gap-y-2 w-full pl-10
          `}
      >
        {props.list.map((item) => (
          <FilterItem name={item} checked={chips.includes(item)}></FilterItem>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
