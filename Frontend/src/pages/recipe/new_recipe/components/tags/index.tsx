import { Grid, Chip } from "../../../../../components";
import constants from "../../../../../constants";
import SectionTitle from "../section_title";
const Tags = ({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (value: string[]) => void;
}) => {
  return (
    <div>
      <SectionTitle title="Tags" />
      <Grid
        items={[
          constants.TAGS.map((tag) => (
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
          )),
        ]}
      />
    </div>
  );
};

export default Tags;
