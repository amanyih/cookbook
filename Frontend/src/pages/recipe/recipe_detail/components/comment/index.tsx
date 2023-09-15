import { useState } from "react";
import CommentListDto from "../../../../../types/dtos/comment/comment.list.dto";
import Comment from "./comment";
import { IoSend } from "react-icons/io5";
import useInput from "../../../../../hooks/useInput";
import useHttp from "../../../../../hooks/useHttp";

interface Props {
  comments: any[];
  recipeId: number;
}

const Comments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState<CommentListDto[]>(props.comments);
  const { value, onChange, error, errorMessage, reset } = useInput(
    "",
    (value) =>
      value.length > 0 &&
      value.length < 100 &&
      value.trim().length > 0 &&
      value.trim().length < 100
  );

  const { sendRequest, data, error: postError, loading } = useHttp();

  const submitComment = async () => {
    if (value.length === 0) return;
    const comment = await sendRequest({
      url: "/comment",
      method: "POST",
      body: {
        content: value,
        recipeId: props.recipeId,
      },
    });
    console.log(comment);

    if (comment) {
      setComments((prev) => [...prev, comment["data"]["comment"]]);
      reset();
    }
  };

  return (
    <div className="flex flex-col w-full h-full px-5 py-3 border-2 border-gray-300 rounded-lg">
      <h1 className="mb-3 font-bold text-2xl text-gray-800 dark:text-gray-100">
        Comments{" "}
        <span className=" font-normal text-base text-gray-600 dark:text-gray-400">
          ({comments.length})
        </span>{" "}
      </h1>
      {comments.map((comment: CommentListDto) => (
        <Comment comment={comment} />
      ))}
      {comments.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-full border-2 mb-3 border-gray-300 rounded-lg dark:border-gray-600 px-5 py-6">
          <h1 className="mb-3 font-bold text-2xl text-gray-800 dark:text-gray-100">
            No Comments Yet!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Be the first to comment
          </p>
        </div>
      )}
      <div className="flex items-center justify-between w-full h-16 px-5 py-3 border-2 border-gray-300 rounded-lg">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full h-10 px-5 py-3 border-2 border-gray-300 rounded-l-lg focus:  outline-none focus:border-primary-400"
          placeholder="Write a comment..."
        />
        <button
          className="w-10 h-10 bg-primary-400 rounded-r-lg hover:bg-primary-500 focus:outline-none focus:bg-primary-500 dark:hover:bg-primary-500 dark:focus:bg-primary-500 p-2 mr-2"
          onClick={submitComment}
        >
          <IoSend className="w-5 h-5 text-white dark:text-gray-100 text-opacity-80" />
        </button>
      </div>
    </div>
  );
};

export default Comments;
