import { BsGraphUp, BsShare, BsHeart } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons";

const RecipeDetailHeader = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <span className="flex text-xl">
          <BsGraphUp className="mr-5" /> <span>85% would make this again</span>
        </span>
        <span className="flex text-4xl">
          <BsShare className="mx-10" />
          <BsHeart />
        </span>
      </div>
      <h1 className="font-semibold text-5xl">
        Strawberry Cream Cheese French Toast Bake with Strawberry Syrup
      </h1>
      <div className=" border-b-2 border-gray-300 py-4 ">
        <span>
          <span>
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className=" inline-block w-10 h-10 rounded-full"
              alt=""
            />
          </span>
          <span className="ml-2 text-lg">John Doe</span>
        </span>
        <span>
          <span className="ml-2 text-lg">|</span>

          <span className="ml-2 text-lg">August 1, 2021</span>
        </span>
        <span>
          <span className="ml-2 text-lg">|</span>
          <span className="ml-2 text-lg">20 Comments</span>
        </span>
        <span>
          <span className="ml-2 text-lg">|</span>
          <span className="ml-2 text-lg">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <FontAwesomeIcon icon={faRegularStar} className="text-yellow-500" />
          </span>
        </span>
      </div>
      <div className="flex flex-col items-center">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolore
          itaque deleniti quis, voluptates, veritatis, placeat atque commodi
          provident aspernatur perferendis iusto tempore? Tenetur laudantium
          reiciendis aspernatur nisi assumenda. Recusandae, sed nostrum aperiam
          non possimus atque suscipit magnam! Beatae, nesciunt! Laborum quam
          quidem optio voluptate nostrum? Suscipit ullam voluptatem assumenda.
        </p>
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  );
};

export default RecipeDetailHeader;
