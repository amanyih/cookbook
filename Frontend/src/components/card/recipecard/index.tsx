import { Link } from "react-router-dom";
import img from "../../../assets/svg/breakfast.svg";
import Image from "../image";
import CardBody from "./cardBody";
import constants from "../../../constants";
import { RecipeListDto } from "../../../types";

interface props {
  recipe: RecipeListDto;
}

const RecipeCard: React.FC<props> = ({ recipe }) => {
  return (
    <div
      className=" rounded-xl shadow-xl bg-white dark:bg-slate-600 dark:text-gray-50 dark:hover:bg-slate-500 hover:bg-gray-100 transition duration-300 ease-in-out overflow-hidden mb-10
    "
    >
      <Link to={`/recipe/${recipe.id}`} className=" cursor-default">
        <Image src={recipe!.image ?? img} customClass="h-64" />
        <div className="p-4 w-full">
          <CardBody
            id="1"
            title={recipe.title || "Recipe Title"}
            description={recipe.description || "Recipe Description"}
            author={recipe.author.profile.name || "Recipe Author"}
            rating={recipe.rating ?? 0}
            comments={recipe.comments}
            date={recipe.createdAt.toString()}
            cookTime={recipe.cookingTime}
            serving={recipe.serving}
            isLiked={recipe.isLiked}
            authorImg={
              recipe.author.profile.profilePicture ??
              constants.profilePlaceholder
            }
          />
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
