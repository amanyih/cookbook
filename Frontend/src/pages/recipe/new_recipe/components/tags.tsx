import { Grid, Chip } from "../../../../components";
import constants from "../../../../constants";

const Tags = ({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (value: string[]) => void;
}) => {
  return (
    <div>
      <h1 className=" text-3xl font-bold bg-gray-200 p-4 mb-5">Tags</h1>
      <Grid
        items={[
          constants.TAGS.map((tag) => (
            <Chip name={tag} dissmisable={false} onDelete={() => {}} />
          )),
        ]}
      />
    </div>
  );
};

export default Tags;
