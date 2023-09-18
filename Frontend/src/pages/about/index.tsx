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
    <div className=" flex flex-col justify-center items-center w-full h-full   px-10 py-10 rounded-md shadow-md">
      <div
        className=" flex flex-col justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat  px-10 py-10 rounded-md shadow-md mb-10"
        style={{
          backgroundImage:
            "url(https://t3.ftcdn.net/jpg/03/46/14/30/360_F_346143059_HJSSw7TxF0C7SnZcrXYN2vR7DHHOCOxJ.jpg",
        }}
      >
        <h1 className=" text-center text-white text-4xl font-semibold">
          About
        </h1>
        <p className=" text-center text-white text-xl font-semibold mb-10 w-full max-w-2xl">
          Welcome to Cookbook, your culinary companion on the web! We're
          passionate about the art of cooking and are thrilled to share our love
          for food with you. Our journey began as a humble kitchen experiment,
          and over time, it has evolved into a vibrant online community of food
          enthusiasts. Whether you're a seasoned chef or a kitchen novice,
          Cookbook is here to inspire, educate, and empower you on your
          gastronomic adventures
        </p>
        <Button className="text-xl font-bold w-52 h-16">Get Started</Button>
      </div>
      <div className=" text-center text-gray-600 dark:text-gray-300 text-xl font-semibold px-10 py-10 mb-10 w-full">
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
