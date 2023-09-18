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
    <div className=" flex flex-col w-full mb-5  dark:text-gray-100">
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
    </div>
  );
};

export default Tags;
