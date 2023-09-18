import { useDispatch, useSelector } from "react-redux";
import {
  Chip,
  RecipeCard,
  Grid,
  RecipeCardSkeleton,
} from "../../../../components";
import { filterActions } from "../../../../store/actions";
import { RecipeListDto } from "../../../../types";
import { StateInterface } from "../../../../store";

interface SearchResultInterface {
  chips: string[];
  resultLength: number;
  recipes: RecipeListDto[];
  searchword: string;
}

const SearchResult: React.FC<SearchResultInterface> = ({ searchword }) => {
  const dispatch = useDispatch();
  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];

  const { loading, recipes, resultLength } = useSelector(
    (state: StateInterface) => state.search
  );

  return (
    <div className="w-full">
      <span className=" text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
        {resultLength > 0
          ? `Found ${resultLength} ${resultLength > 1 ? "recipes" : "recipe"} ${
              searchword && searchword.length > 0 ? `for "${searchword}"` : ""
            } `
          : "No recipes found"}
      </span>
      <span className=" flex flex-wrap justify-start items-center gap-x-2  gap-y-2 w-full mt-5 mb-10">
        {chips.map((item) => (
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
      {loading && (
        <Grid
          items={Array(4)
            .fill(4)
            .map((cur, index) => (
              <RecipeCardSkeleton key={index} />
            ))}
        />
      )}
      {!loading && (
        <Grid
          showFour={false}
          items={recipes.map((recipe: RecipeListDto) => {
            if (chips && chips.length > 0) {
              if (!chips.some((chip) => recipe.categories.includes(chip))) {
                return null;
              }
            }
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        />
      )}
      {recipes && recipes.length === 0 && (
        <div className="w-full flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
            No recipes found
          </h1>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
