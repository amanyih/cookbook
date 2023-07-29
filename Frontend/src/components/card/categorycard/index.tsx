import Image from "../image";
import CardBody from "./cardBody";

const CategoryCard = () => {
  return (
    <div className="w-96 mr-10 mb-10 last:mr-0 flex-shrink-0 rounded-3xl overflow-hidden shadow-xl">
      <Image
        customClass="h-60"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></Image>
      <CardBody
        title="Italian"
        description="Explore the best of Italian cuisine with our 50+ recipes. Learn how to
        make the perfect pasta or pizza and impress your friends and family."
        reipes={56}
      />
    </div>
  );
};

export default CategoryCard;
