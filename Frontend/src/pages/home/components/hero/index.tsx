import temp from "../../../../assets/svg/chef.svg";
import { Rating } from "../../../../components";

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

        <div className=" flex justify-center items-center gap-5">
          <a href="/recipe">
            <button className="w-52 h-16 bg-primary-400 text-white font-bold rounded-lg shadow-md hover:bg-red-300 transition duration-300 ease-in-out text-xl">
              Get Started
            </button>
          </a>
          <a href="/about">
            <button className="w-52 h-16 bg-gray-800 text-white font-bold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out text-xl">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div>
        <img src={temp} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;
