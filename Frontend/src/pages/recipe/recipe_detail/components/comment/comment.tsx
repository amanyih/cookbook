import { useState } from "react";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaThumbsUp,
  FaThumbsDown,
} from "react-icons/fa";
const Comment = () => {
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
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className=" inline-block w-10 h-10 rounded-full"
          alt=""
        />
      </div>
      <div className="border-b-2 pb-4">
        <h1 className="mb-1 text-xl font-semibold">John Doe</h1>
        <h2 className="mb-2">August 1, 2021</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Minima magni nulla, ab voluptas dolores commodi cumque qui repellendus
          nostrum illum velit modi sint officiis consequatur perspiciatis
          similique ducimus dolore? Perferendis!
        </p>
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
