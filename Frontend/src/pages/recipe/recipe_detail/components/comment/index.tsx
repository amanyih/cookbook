import Comment from "./comment";
import { TextArea } from "../../../../../components";
const Comments = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-5 text-3xl font-semibold pb-8 border-b-2">
        Comments <span>(24)</span>{" "}
      </h1>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
