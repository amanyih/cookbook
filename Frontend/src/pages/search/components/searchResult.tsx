import { useDispatch } from "react-redux";
import { Chip } from "../../../components";
import { CategoriesSections } from "../../categories/components";
import { filterActions } from "../../../store/filter";

interface SearchResultInterface {
  chips: string[];
}

const SearchResult: React.FC<SearchResultInterface> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-4/5">
      <span className="text-3xl font-semibold">{450} recipes</span>
      <span className="flex flex-wrap">
        {props.chips.map((item) => (
          <Chip
            key={item}
            name={item}
            onDelete={() => {
              dispatch(filterActions.removeChip(item));
            }}
            dissmisable={true}
          />
        ))}
      </span>
      <div>
        <CategoriesSections></CategoriesSections>
      </div>
    </div>
  );
};

export default SearchResult;
