import Image from "../image";
import CardBody from "./cardBody";
const RecipeCard = () => {
  return (
    <div className="w-96 mr-16 mb-20 last:mr-0 flex-shrink-0 rounded-xl overflow-hidden shadow-xl">
      <Image src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <div className="p-4 w-full">
        <CardBody
          id="1"
          title="Premium Chicken Biryani"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. "
          author="John Doe"
          rating={4}
          comments={20}
          date="2021-08-01"
          authorImg="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
