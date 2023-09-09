import { Link } from "react-router-dom";
import img from "../../../assets/svg/breakfast.svg";
import Image from "../image";
import CardBody from "./cardBody";
import Recipe from "../../../types/models/recipe";

interface props {
  recipe?: Recipe;
}

const RecipeCard: React.FC<props> = ({ recipe }) => {
  return (
    <div className="w-96 mr-16 mb-20 last:mr-0 flex-shrink-0 rounded-xl overflow-hidden shadow-xl dark:bg-slate-600">
      <Link to="/recipe/id" className=" cursor-default">
        <Image src={img} />
        <div className="p-4 w-full">
          <CardBody
            id="1"
            title={recipe?.title || "Recipe Title"}
            description={recipe?.description || "Recipe Description"}
            author={"Author"}
            rating={4}
            comments={20}
            date="12/12/2020"
            authorImg="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </Link>
    </div>
  );
};

export default RecipeCard;
