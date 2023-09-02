import { SearchBar, Filter, SearchResult } from "./components";
import { useSelector } from "react-redux";
import { StateInterface } from "../../store";
const SearchPage = () => {
  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];

  return (
    <div className="w-full flex-grow flex flex-col items-center">
      <SearchBar />
      <div className="flex justify-between w-full mt-14 bg-whiteish dark:bg-slate-700 p-10">
        <Filter />
        <SearchResult chips={chips} />
      </div>
    </div>
  );
};

export default SearchPage;
