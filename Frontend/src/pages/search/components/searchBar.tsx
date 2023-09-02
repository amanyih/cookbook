const SearchBar = () => {
  return (
    <div className="flex w-1/2 items-center">
      <h1 className=" text-4xl font-semibold mr-4">Search</h1>
      <input
        placeholder="Search"
        type="text"
        className="border-2 text-2xl border-black px-12 py-3 rounded-full w-full  focus:outline-none "
      />
    </div>
  );
};

export default SearchBar;
