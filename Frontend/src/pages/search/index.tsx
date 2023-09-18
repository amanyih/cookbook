import { useState } from "react";
import { Filter, SearchResult } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipesAction } from "../../store/actions";
import { StateInterface } from "../../store";
import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { AnyAction } from "redux";

const SearchPage = () => {
  const dispatch = useDispatch();
  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];

  const { recipes, resultLength } = useSelector(
    (state: StateInterface) => state.search
  );
  const { sendRequest: searchForRecipes } = useHttp();
  const [search, setSearch] = useState<string>("");

  const [searchTimeout, setSearchTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearchTimeout(
      setTimeout(() => {
        dispatch(
          searchRecipesAction(searchForRecipes, search) as unknown as AnyAction
        );
      }, 1000)
    );
  }, [search]);

  return (
    <div
      className=" flex flex-col justify-center items-center w-full min-h-screen bg-whiteish 
    dark:bg-slate-700 dark:text-gray-100 transition duration-200 ease-in-out"
    >
      <div className=" flex flex-col md:flex-row px-5 justify-between items-center w-full p-10 md:px-20 lg:px-40">
        <h1 className=" text-4xl dark:text-gray-100 font-semibold mb-5 mr-5">
          Search
        </h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
          className="flex-grow bg-transparent  outline-none  border-2  border-gray-400  dark:border-gray-200  text-xl  dark:text-gray-100  placeholder-gray-400  dark:placeholder-gray-200  focus:placeholder-transparent  focus:dark:border-primary-400 focus:border-primary-400  transition  duration-200  ease-in-out  rounded-full  py-2  px-6  h-14"
        />
      </div>
      <div
        className=" flex flex-col items-center md:items-start md:flex-row
        py-5
       justify-center  w-full min-h-screen bg-whiteish dark:bg-slate-700 dark:text-gray-100 transition duration-200 ease-in-out gap"
      >
        <Filter />
        <SearchResult
          resultLength={resultLength}
          recipes={recipes}
          chips={chips}
          searchword={search}
        />
      </div>
    </div>
  );
};

export default SearchPage;
