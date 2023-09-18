import temp from "../../../../assets/svg/chef.svg";
import { Link } from "react-router-dom";
import { Button } from "../../../../components";

//the hero text size should be responsive
const Hero = () => {
  return (
    <div className="  flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 mb-20">
      <div className=" flex flex-col justify-center items-center text-center">
        <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-50 mb-5">
          <span className="text-primary-400">Over</span> 100 recipes
        </div>
        <div className=" text-gray-500 dark:text-gray-50 text-lg mb-10 px-10">
          We have a wide range of recipes for you to choose from! We have
          recipes for every occasion. From breakfast to dinner, we have it all!
        </div>

        <div className=" flex flex-col sm:flex-row justify-center items-center gap-5">
          <Link to="/recipe">
            <Button className="w-52 h-16 text-xl font-bold">Get Started</Button>
          </Link>
          <Link to="/about">
            <Button
              className="text-xl font-bold w-52 h-16 bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
              background="bg-gray-800 dark:bg-gray-50 hover:bg-gray-900 dark:hover:bg-gray-100"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img src={temp} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
