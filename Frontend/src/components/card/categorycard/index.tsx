import Image from "../image";
import CardBody from "./cardBody";
import img from "../../../assets/svg/street_food.svg";
const CategoryCard = ({ category }: { category: any }) => {
  return (
    <div className="w-96 mr-10 mb-10 last:mr-0 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl dark:bg-slate-600">
      <Image customClass="h-60" src={img}></Image>
      <CardBody
        title={category ? category.name : "Italian"}
        description={
          category
            ? category.description
              ? category.description
              : ""
            : "Explore the best of Italian cuisine with our 50+ recipes. Learn how to make the perfect pasta or pizza and impress your friends and family."
        }
        reipes={category ? category.recipes : 0}
      />
    </div>
  );
};

export default CategoryCard;
