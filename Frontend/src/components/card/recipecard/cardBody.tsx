import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faMessage as faMessageRegular,
  faHeart as faHeartRegular,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { DateFormat } from "../../../util";
import Rating from "../../rating";
import { GoPeople } from "react-icons/go";
import useHttp from "../../../hooks/useHttp";
import { likeRecipe as likeRecipeAction } from "../../../store/recipe/actions";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

interface Props {
  id: number;
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
  username: string;
}

const CardBody: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState<boolean>(props.isLiked);
  const dispatch = useDispatch();
  const { sendRequest: likeRecipe } = useHttp();

  const likeRecipeHandler = async () => {
    dispatch(likeRecipeAction(likeRecipe, props.id) as unknown as AnyAction);
  };

  const handleLike = async (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setLiked((prev) => {
      return !prev;
    });

    likeRecipeHandler();
  };

  return (
    <div>
      <div className="flex full justify-between items-center">
        <Rating half={false} rating={props.rating} />{" "}
        <div>
          <div>
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span className=" text-base text-gray-500 dark:text-gray-200">
              {props.cookTime} min
            </span>
          </div>
          <div className="flex">
            <GoPeople className="mr-2" />
            <span className=" text-base text-gray-500 dark:text-gray-200">
              {props.serving}
            </span>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-2 min-h-14">
        {props.title}
      </h1>
      <p>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="mr-1 text-gray-500 dark:text-gray-200 text-sm"
        />
        <span className=" text-sm text-gray-500 dark:text-gray-200">
          {DateFormat(new Date(props.date))}
        </span>
      </p>
      <div className="flex flex-col justify-between h-36">
        <p>
          {props.description.length > 100 ? (
            <span>{props.description.substring(0, 100)}...</span>
          ) : (
            <span>{props.description}</span>
          )}
        </p>
        <a href={`/profile/${props.username}`}>
          <div className=" flex items-center">
            <img
              src={props.authorImg}
              className=" rounded-full w-8 h-8"
              alt=""
            />
            <span className="ml-2 text-sm font-semibold">{props.author}</span>
          </div>
        </a>
        <div className="flex justify-between items-center mt-3">
          <div className="text-xl text-gray-500 dark:text-gray-200">
            <FontAwesomeIcon icon={faMessageRegular} className=" mr-2" />
            <span className="  ">{props.comments}</span>
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
