import { useSelector } from "react-redux";
import FilterItem from "./filterItem";
import { StateInterface } from "../../../../store";

interface FilterSectionProps {
  title: string;
  list: string[];
}

const FilterSection: React.FC<FilterSectionProps> = (props) => {
  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];

  return (
    <div>
      <h1 className=" text-2xl font-bold text-gray-500 dark:text-whiteish">
        {props.title}
      </h1>
      <div className=" pl-10 flex flex-col">
        {props.list.map((item) => (
          <FilterItem name={item} checked={chips.includes(item)}></FilterItem>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
