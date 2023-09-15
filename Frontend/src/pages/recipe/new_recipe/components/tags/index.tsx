import { Chip } from "../../../../../components";
import constants from "../../../../../constants";
const Tags = ({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (value: string[]) => void;
}) => {
  return (
    <div className=" flex flex-col w-full mb-5 dark:bg-gray-900 dark:text-gray-100">
      <span className=" text-gray-600 dark:text-gray-400 text-sm mb-3">
        Suggested Tags
      </span>
      <div className="flex flex-wrap gap-2 mb">
        {constants.TAGS.map((tag) => {
          return (
            <Chip
              name={tag}
              isHighlighted={tags.includes(tag)}
              dissmisable={false}
              onDelete={(name) => {
                if (tags.includes(name)) {
                  setTags(tags.filter((tag) => tag !== name));
                } else {
                  setTags([...tags, name]);
                }
              }}
            />
          );
        })}
      </div>
      <div>
        <h1 className=" text-gray-600 dark:text-gray-400 text-sm mb-3">
          Create your own tag by typing and pressing enter.
        </h1>

        <input
          type="text"
          placeholder="Eg: Chicken"
          className=" w-full h-14 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:border-primary-400 dark:bg-gray-900 dark:text-gray-100"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (tags.includes(e.currentTarget.value)) {
                setTags(tags.filter((tag) => tag !== e.currentTarget.value));
              } else {
                setTags([...tags, e.currentTarget.value]);
              }
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default Tags;
