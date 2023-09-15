import Image from "../image";
import CardBody from "./cardBody";
import img from "../../../assets/svg/street_food.svg";
import { Link } from "react-router-dom";
import { CategoryListDto } from "../../../types";

const CategoryCard = ({ category }: { category: CategoryListDto }) => {
  return (
    <div
      className=" h-96 rounded-xl shadow-md bg-white dark:bg-slate-500 dark:text-gray-50 dark:hover:bg-slate-400 hover:bg-gray-100 transition duration-300 ease-in-out overflow-hidden mb-10 cursor-pointer


    "
    >
      <Link to={`/category/${category.name}`}>
        <img
          src={img}
          className=" w-full h-60 object-cover object-center hover:scale-110 transition duration-300 ease-in-out"
          alt=""
        />
        <CardBody
          title={category ? category.name : "Italian"}
          description={
            "Explore the best of Italian cuisine with our 50+ recipes. Learn how to make the perfect pasta or pizza and impress your friends and family."
          }
          reipes={category ? category.recipes : 0}
        />
      </Link>
    </div>
  );
};

export default CategoryCard;
