import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <FontAwesomeIcon icon={faSearch} className=" text-xl mx-2 " />
    // <div>
    //   <input
    //     className="border border-red-400 focus:border-none focus:outline-slate-400 px-4 py-2 rounded-full text-sm text-gray-600 w-64"
    //     type="text"
    //     placeholder="Search"

    //   />
    // </div>
  );
};

export default SearchBar;
