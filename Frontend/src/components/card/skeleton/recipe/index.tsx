import constants from "../../../../constants";

const RecipeCardSkeleton = () => {
  return (
    <div className="max-w-sm border border-gray-200 rounded-xl shadow animate-pulse duration-200  dark:border-gray-500">
      <div className="flex items-center justify-center h-48 mb-4 bg-gray-200 rounded dark:bg-gray-700"></div>
      <div className="p-4">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-600 w-full mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
        <div className="flex items-center mt-4 space-x-3">
          <img
            src={constants.profilePlaceholder}
            className="w-14 h-14 rounded-full opacity-50 dark:opacity-20"
            alt=""
          />
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
