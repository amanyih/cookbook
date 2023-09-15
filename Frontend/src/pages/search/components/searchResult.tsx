import { useDispatch } from "react-redux";
import { Chip, RecipeCard, Grid } from "../../../components";
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
      <Grid
        showFour={false}
        items={
          props.recipes &&
          props.recipes.map((recipe) => {
            return <RecipeCard recipe={recipe} />;
          })
        }
      />
    </div>
  );
};

export default SearchResult;
