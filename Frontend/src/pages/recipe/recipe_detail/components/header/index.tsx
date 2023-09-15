import { BsGraphUp, BsShare, BsHeart, BsHeartFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Chip } from "../../../../../components";
import { AuthorDto } from "../../../../../types";
import { Rating } from "../../../../../components";

interface Props {
  isLiked: boolean;
  author: AuthorDto;
  title: string;
  description: string;
  rating: number;
  comments: number;
  date: string;
  imgae: string;
  tags: string[];
}

const RecipeDetailHeader: React.FC<Props> = (props) => {
  const [liked, setLiked] = useState<boolean>();

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="mb-5 flex justify-between w-full">
        <span className="flex text-md">
          <BsGraphUp className="mr-5" /> <span>85% would make this again</span>
        </span>
        <span className="flex text-4xl">
          <BsShare className="mx-10" />
          <span onClick={toggleLike} className="hover:cursor-pointer">
            {!liked && <BsHeart />}
            {liked && <BsHeartFill className="text-primary-400" />}
          </span>
        </span>
      </div>
      <h1 className="font-semibold text-5xl">{props.title}</h1>

      <div className="mb-5 border-b-2 border-gray-300 py-4 flex ">
        <span>
          <span>
            <img
              src={
                props.author.profile.profilePicture ??
                "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              className=" inline-block w-10 h-10 rounded-full bg-slate-100"
              alt=""
            />
          </span>
          <span className="ml-2 text-lg">
            {props.author.profile.name ?? "John Doe"}
          </span>
        </span>
        <span>
          <span className="ml-2 text-lg">|</span>

          <span className="ml-2 text-lg">{props.date}</span>
        </span>
        <span>
          <span className="ml-2 text-lg">|</span>
          <span className="ml-2 text-lg">{props.comments} Comments</span>
        </span>
        <Rating rating={props.rating} half={false} />
      </div>
      <div className="mb-10 flex flex-col items-center">
        <p className="mb-5 text-lg">{props.description}</p>
        <div className="mb-5 w-full flex flex-wrap">
          {props.tags.map((tag) => (
            <Chip name={tag} onDelete={() => {}} />
          ))}
        </div>
        <img
          src={props.imgae}
          className="h-96 w-full object-cover bg-primary-700"
          alt=""
        />
      </div>
    </div>
  );
};

export default RecipeDetailHeader;
