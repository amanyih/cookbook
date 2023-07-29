import FilterItem from "./filterItem";

interface FilterSectionProps {
  title: string;
  list: string[];
}

const FilterSection: React.FC<FilterSectionProps> = (props) => {
  return (
    <div>
      <h1 className=" text-3xl font-bold text-gray-500">{props.title}</h1>
      <div className=" pl-20 flex flex-col">
        {props.list.map((item) => (
          <FilterItem name={item}></FilterItem>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
