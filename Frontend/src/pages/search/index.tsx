import { SearchBar, Filter, SearchResult } from "./components";
import { Chip } from "../../components";
const SearchPage = () => {
  return (
    <div className="w-full flex-grow flex flex-col items-center">
      <SearchBar />
      <div className="flex justify-between w-full mt-20 bg-whiteish p-10">
        <Filter />
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchPage;
