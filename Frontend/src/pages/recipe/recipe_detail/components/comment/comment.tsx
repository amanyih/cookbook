import { useState } from "react";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";

interface Props {
  comment: any;
}
const Comment: React.FC<Props> = (props) => {
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
    <li className="flex mb-5">
      <div className="mr-2">
        <img
          src={
            props.comment.user.profilePicture ??
            "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          className=" inline-block w-10 h-10 rounded-full"
          alt=""
        />
      </div>
      <div className="border-b-2 pb-4">
        <h1 className="mb-1 text-xl font-semibold">
          {props.comment.user.name ?? "John Doe"}
        </h1>
        <h2 className="mb-2">{props.comment.createdAt}</h2>
        <p className="mb-3">{props.comment.content}</p>
        <div className="flex text-x">
          <span className="mr-3 hover:cursor-pointer" onClick={likeComment}>
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
