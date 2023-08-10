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
      <h1 className=" text-3xl font-bold text-gray-500">{props.title}</h1>
      <div className=" pl-20 flex flex-col">
        {props.list.map((item) => (
          <FilterItem name={item} checked={chips.includes(item)}></FilterItem>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
