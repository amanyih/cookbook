import { Fragment } from "react";
import FilterSection from "./filterSection";

const Filter = () => {
  return (
    <div className=" w-1/4 pt-20">
      <FilterSection
        title="Cuisine"
        list={["italian", "mexican", "Ethiopian", "Eritrean", "Carebean"]}
      />
      <FilterSection
        title="Cuisine"
        list={["italian", "mexican", "Ethiopian", "Eritrean", "Carebean"]}
      />
      <FilterSection
        title="Cuisine"
        list={["italian", "mexican", "Ethiopian", "Eritrean", "Carebean"]}
      />
      <FilterSection
        title="Cuisine"
        list={["italian", "mexican", "Ethiopian", "Eritrean", "Carebean"]}
      />
    </div>
  );
};

export default Filter;
