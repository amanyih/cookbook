import { useEffect } from "react";
import { Comment } from "../../../../components";
import useHttp from "../../../../hooks/useHttp";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../../../../store";
import { AnyAction } from "redux";
import getUserComments from "../../../../store/comment/user_comment/actions";

interface CommentsSectionProps {
  username: string;
}

const CommentsSection = ({ username }: CommentsSectionProps) => {
  const dispatch = useDispatch();
  const { comments, isLoading } = useSelector(
    (state: StateInterface) => state.userComment
  );

  const { sendRequest: getComments } = useHttp();

  useEffect(() => {
    dispatch(getUserComments(getComments, username) as unknown as AnyAction);
  }, [username]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-50 dark:bg-slate-800 px-10 py-10 rounded-md shadow-md">
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      ) : (
        <div className="text-center text-gray-500">No comments yet!</div>
      )}
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full bg-gray-50 dark:bg-gray-900 px-10 py-10 rounded-md shadow-md">
          Loading...
        </div>
      )}
    </div>
  );
};

export default CommentsSection;
