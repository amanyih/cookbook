import { useState } from "react";
import { FaRegThumbsUp, FaThumbsUp, FaHeart, FaRegHeart } from "react-icons/fa";
import CommentListDto from "../../../types/dtos/comment/comment.list.dto";
import constants from "../../../constants";
import { DateFormat } from "../../../util";
import useHttp from "../../../hooks/useHttp";
import { useDispatch } from "react-redux";
import { likeCommentAction } from "../../../store/comment/actions";
import { AnyAction } from "redux";

interface Props {
  comment: CommentListDto;
}
const Comment: React.FC<Props> = ({ comment }) => {
  const [liked, setLiked] = useState<boolean>(comment.isLiked);
  const { sendRequest: likeCommentHandler } = useHttp();
  const dispatch = useDispatch();

  const likeRecipeHandler = async () => {
    dispatch(
      likeCommentAction(
        likeCommentHandler,
        `${comment.id}`
      ) as unknown as AnyAction
    );
  };

  const likeComment = () => {
    setLiked((prev) => !prev);
    likeRecipeHandler();
  };

  return (
    <li className=" flex flex-row w-full mb-5 border-b-2 border-gray-300 dark:border-gray-600 justify-start items-start">
      <a href={`/profile/${comment.user.username}`}>
        <div className=" flex-shrink-0 mr-3">
          <img
            src={
              comment.user.profile.profilePicture ??
              constants.profilePlaceholder
            }
            className=" w-10 h-10 rounded-full object-cover"
            alt=""
          />
        </div>
      </a>
      <div className=" flex flex-col w-full justify-between py-2 text-sm text-gray-800 dark:text-gray-100 ">
        <h1 className=" font-bold text-base dark:text-gray-100 mb-1 ">
          <a href={`/profile/${comment.user.username}`}>
            {comment.user.profile.name}
          </a>
        </h1>
        <h2 className=" text-xs text-gray-600 dark:text-gray-400 mb-1 ">
          {DateFormat(new Date(comment.createdAt))}
        </h2>
        <p className=" text-sm text-gray-800 dark:text-gray-100 mb-2 ">
          {comment.content}
        </p>
        <div className=" flex flex-row items-center gap-5 w-full mb-2 text-base ">
          <span
            className="  hover:cursor-pointer  text-gray-600 dark:text-gray-400"
            onClick={likeComment}
          >
            {liked ? <FaHeart className="text-primary-400" /> : <FaRegHeart />}{" "}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Comment;
