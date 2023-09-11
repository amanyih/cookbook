import { useState } from "react";
import { SearchBar, Filter, SearchResult } from "./components";
import { useSelector } from "react-redux";
import { StateInterface } from "../../store";
import { useEffect } from "react";
import useHttp from "../../hooks/useHttp";
const SearchPage = () => {
  const chips = useSelector<StateInterface>(
    (state) => state.filter.chips
  ) as string[];
  const [search, setSearch] = useState<string>("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [resultlength, setResultLength] = useState<number>(0);
  const { sendRequest: searchRecipes } = useHttp();

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipes = await searchRecipes({
        url: `/search/recipe?title=${search}`,
      });
      console.log(recipes);
      setRecipes(recipes["data"]["recipe"]);
      setResultLength(recipes["results"]);
    };
    fetchRecipes();
  }, [search]);

  return (
    <div className="w-full flex-grow flex flex-col items-center">
      <div className="flex w-1/2 items-center">
        <h1 className=" text-4xl font-semibold mr-4">Search</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          type="text"
          className="border-2 text-2xl border-black px-12 py-3 rounded-full w-full  focus:outline-none "
        />
      </div>
      <div className="flex justify-between w-full mt-14 bg-whiteish dark:bg-slate-700 p-10">
        <Filter />
        <SearchResult
          resultLength={resultlength}
          recipes={recipes}
          chips={chips}
        />
      </div>
    </div>
  );
};

export default SearchPage;
