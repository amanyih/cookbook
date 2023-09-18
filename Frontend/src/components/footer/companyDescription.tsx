import Logo from "../logo";
const CompanyDescription = () => {
  return (
    <div className=" flex flex-col space-y-5 text-gray-600 dark:text-whiteish w-full md:w-1/3">
      <Logo />

      <p className=" text-sm text-gray-600 dark:text-whiteish">
        "Discover, share, and savor culinary delights on Cookbook, the ultimate
        platform for recipe enthusiasts. Explore interactive videos, connect
        with fellow foodies, and elevate your cooking skills to new heights."
      </p>
    </div>
  );
};

export default CompanyDescription;
