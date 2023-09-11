import { useDispatch } from "react-redux";
import { Chip, RecipeCard } from "../../../components";
// import { CategoriesSections } from "../../categories/components";
import { filterActions } from "../../../store/filter";

interface SearchResultInterface {
  chips: string[];
  resultLength: number;
  recipes: any[];
}

const SearchResult: React.FC<SearchResultInterface> = (props) => {
  const dispatch = useDispatch();
  return (
    <div className=" w-4/5">
      <span className="text-3xl font-semibold">
        {props.resultLength} recipes
      </span>
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
      <div
        className="flex flex-wrap 
      justify-center
      items-center
      gap-10
      w-full
      mb-10
      
      "
      >
        {props.recipes && props.recipes.length > 0 ? (
          props.recipes.map((recipe) => <RecipeCard recipe={recipe} />)
        ) : (
          <h1>No recipes found</h1>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
