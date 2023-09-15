import { Button } from "../../components";
import {
  VisionValues,
  Content,
  Expertise,
  FAQs,
  ContactUs,
} from "./components";
const AboutPage = () => {
  return (
    <div className=" flex flex-col justify-between items-center w-full">
      <div
        className="bg-cover bg-center w-full h-96 bg-red-600 justify-center items-center flex flex-col text-white -mx-10 mb-10"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/03/46/14/30/360_F_346143059_HJSSw7TxF0C7SnZcrXYN2vR7DHHOCOxJ.jpg)",
        }}
      >
        <h1 className=" text-7xl text-white mb-10">About </h1>
        <p className="w-1/3 text-center text-xl mb-5">
          Our mission is simple: to inspire and empower people to discover the
          joy of cooking by providing a diverse collection of mouthwatering
          recipes and culinary inspiration.
        </p>
        <Button
          isFilled={true}
          onClick={() => {}}
          className="py-3 px-4 text-black dark:text-white hover:text-black dark:hover:text-black rounded-md"
        >
          Get Started
        </Button>
      </div>
      <div
        className="
      text-center
      text-gray-600
      dark:text-gray-300
      text-xl
      font-semibold
      px-10
      py-10
      mb-10
      w-full

      
      "
      >
        At Cookbook, our vision is to inspire and empower people through the joy
        of cooking and the exploration of delicious flavors. We are dedicated to
        creating a platform that brings individuals together, transcending
        cultural boundaries and fostering a shared love for food.
      </div>
      <VisionValues />
      <Content />
      <Expertise />
      <FAQs />
      <ContactUs />
    </div>
  );
};

export default AboutPage;
