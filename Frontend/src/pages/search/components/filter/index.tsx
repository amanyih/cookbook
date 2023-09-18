import FilterSection from "./filterSection";
import constants from "../../../../constants";

const Filter = () => {
  const categories = constants.CATEGORIES;

  return (
    <div className=" w-full md:w-1/4  pt-10 flex flex-col mr-10 ">
      <FilterSection title="Cuisine" list={categories.Cuisines} />
      <FilterSection
        title="Dietary Preferences"
        list={categories["Dietary Preferences"]}
      />
      <FilterSection title="Dish Type" list={categories["Dish Type"]} />
      <FilterSection title="Meal Course" list={categories["Meal Course"]} />
    </div>
  );
};

export default Filter;
