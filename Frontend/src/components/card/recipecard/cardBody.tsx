import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCalendarAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarRegular,
  faMessage as faMessageRegular,
  faHeart as faHeartRegular,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

interface Props {
  id: String;
  title: string;
  description: string;
  author: string;
  rating: number;
  comments: number;
  date: string;
  authorImg: string;
  isLiked: boolean;
  cookTime: number;
  serving: number;
}

const CardBody: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState<boolean>(props.isLiked);

  const handleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("liked");
    setLiked((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <div className="flex full justify-between">
        <div className=" w-1/2 flex">
          <span className=" flex items-center text-red-400 text-xl mb-2">
            {Array.from({ length: props.rating }, (_, i) => (
              <FontAwesomeIcon icon={faStar} className="ml-1" key={i} />
            ))}
          </span>
          <span className=" flex items-center text-red-400 text-xl mb-2">
            {Array.from({ length: 5 - props.rating }, (_, i) => (
              <FontAwesomeIcon icon={faStarRegular} className="ml-1" key={i} />
            ))}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faClock} className="mr-2"></FontAwesomeIcon>
          <span className=" text-base text-gray-500">{props.cookTime} min</span>
        </div>
      </div>

      <h1 className=" text-xl font-semibold">{props.title}</h1>
      <p>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="mr-1 text-gray-500 text-sm"
        />
        <span className=" text-sm text-gray-500">{props.date}</span>
      </p>
      <div className="flex flex-col justify-between h-36">
        <p>
          {props.description.length > 100 ? (
            <span>{props.description.substring(0, 100)}...</span>
          ) : (
            <span>{props.description}</span>
          )}
        </p>
        <div className=" flex items-center">
          <img src={props.authorImg} className=" rounded-full w-8 h-8" alt="" />
          <span className="ml-2 text-sm font-semibold">{props.author}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div>
            <FontAwesomeIcon
              icon={faMessageRegular}
              className=" text-gray-500 text-base mr-2"
            />
            <span className=" text-base text-gray-500">{props.comments}</span>
          </div>
          <div className=" flex items-center">
            <FontAwesomeIcon
              icon={liked ? faHeart : faHeartRegular}
              className="text-red-400 text-3xl mr-1 cursor-pointer"
              onClick={handleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
