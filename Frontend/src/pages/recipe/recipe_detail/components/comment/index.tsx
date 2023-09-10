import Comment from "./comment";
import { TextArea } from "../../../../../components";

interface Props {
  comments: any[];
}

const Comments: React.FC<Props> = (props) => {
  return (
    <div className="mb-10 w-full">
      <h1 className="mb-5 text-3xl font-semibold pb-8 border-b-2">
        Comments <span>({props.comments.length})</span>{" "}
      </h1>
      {props.comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
