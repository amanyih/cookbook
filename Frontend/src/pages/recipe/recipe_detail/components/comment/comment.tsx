import { useState } from "react";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
import CommentListDto from "../../../../../types/dtos/comment/comment.list.dto";
import constants from "../../../../../constants";
import { DateFormat } from "../../../../../util";

interface Props {
  comment: CommentListDto;
}
const Comment: React.FC<Props> = ({ comment }) => {
  const [liked, setLiked] = useState<boolean>();
  const [disliked, setDisliked] = useState<boolean>();

  const likeComment = () => {
    setDisliked(false);
    setLiked((prev) => !prev);
  };

  const dislikeComment = () => {
    setLiked(false);
    setDisliked((prev) => !prev);
  };

  return (
    <li className=" flex flex-row w-full mb-5 border-b-2 border-gray-300 dark:border-gray-600">
      <div className=" flex-shrink-0 mr ">
        <img
          src={
            comment.user.profile.profilePicture ?? constants.profilePlaceholder
          }
          className=" w-10 h-10 rounded-full object-cover"
          alt=""
        />
      </div>
      <div className=" flex flex-col w-full justify-between py-2 text-sm text-gray-800 dark:text-gray-100 ">
        <h1 className=" font-bold text-base dark:text-gray-100 mb-1 ">
          {comment.user.profile.name ?? "John Doe"}
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
            {liked ? (
              <FaThumbsUp className="text-primary-400" />
            ) : (
              <FaRegThumbsUp />
            )}{" "}
          </span>
          <span className="hover:cursor-pointer" onClick={dislikeComment}>
            {disliked ? (
              <FaThumbsDown className="text-primary-400" />
            ) : (
              <FaRegThumbsDown />
            )}
          </span>
        </div>
      </div>
    </li>
  );
};

export default Comment;
