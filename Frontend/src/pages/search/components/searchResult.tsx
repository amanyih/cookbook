import { Chip } from "../../../components";
import { Grid } from "../../../components";
import { CategoriesSections } from "../../categories/components";
const SearchResult = () => {
  const onDelete = () => {};
  return (
    <div className=" w-4/5">
      <span className="text-3xl font-semibold">{450} recipes</span>
      <span className="flex flex-wrap">
        <Chip name="Chicken" onDelete={onDelete} />
        <Chip name="Ethiopian" onDelete={onDelete} />
        <Chip name="Spicy" onDelete={onDelete} />
      </span>
      <div>
        <CategoriesSections></CategoriesSections>
      </div>
    </div>
  );
};

export default SearchResult;