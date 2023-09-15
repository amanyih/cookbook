import { Rating } from "../../../../../components";
import { FaQuoteRight } from "react-icons/fa";
interface TestimonalCardProps {
  name: string;
  image: string;
  description: string;
  rating: number;
}

const TestimonalCard: React.FC<TestimonalCardProps> = ({
  name,
  image,
  description,
  rating,
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-96 h-96 p-5 bg-white dark:bg-slate-700 shadow-lg rounded-lg  outline-none focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 relative">
      <img
        src={image}
        className="rounded-full w-40 h-40 object-cover border-4 border-primary-400"
        alt={`${name} profile`}
      />

      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <Rating rating={rating} half={false} />
      <p className=" text-gray-800 dark:text-gray-50 text-center w-full h-24">
        {description}
      </p>
      <FaQuoteRight className="text-4xl text-primary-300 absolute -top-5 right-5" />
    </div>
  );
};

export default TestimonalCard;
