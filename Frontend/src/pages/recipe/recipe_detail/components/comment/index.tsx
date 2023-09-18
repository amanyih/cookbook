import CommentListDto from "../../../../../types/dtos/comment/comment.list.dto";
import { Comment, LoadingSpinner } from "../../../../../components";
import { IoSend } from "react-icons/io5";
import useInput from "../../../../../hooks/useInput";
import useHttp from "../../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";
import { AnyAction } from "redux";
import { createCommentAction } from "../../../../../store/actions";

const Comments = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  const { value, onChange, reset } = useInput(
    "",
    (value) =>
      value.length > 0 &&
      value.length < 100 &&
      value.trim().length > 0 &&
      value.trim().length < 100
  );

  const { sendRequest } = useHttp();
  const dispatch = useDispatch();
  const { comments, loading } = useSelector(
    (state: StateInterface) => state.comment
  );

  const submitComment = async () => {
    if (
      value.length > 0 &&
      value.length < 100 &&
      value.trim().length > 0 &&
      value.trim().length < 100 &&
      recipe?.id
    ) {
      const comment = {
        content: value,
        recipeId: recipe?.id,
      };
      dispatch(
        createCommentAction(sendRequest, comment) as unknown as AnyAction
      );
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
        <Comment key={comment.id} comment={comment} />
      ))}
      {loading && <LoadingSpinner />}
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
          className="w-full h-10 px-5 py-3 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-primary-400 dark:bg-gray-700"
          placeholder="Write a comment..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitComment();
            }
          }}
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
