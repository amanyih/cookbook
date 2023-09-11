import { Button } from "../../components";
import { Cooking } from "../../components";
const AboutPage = () => {
  return (
    <div className=" flex flex-col justify-between items-center">
      <div
        className="bg-cover bg-center w-full h-96 bg-red-600 justify-center items-center flex flex-col text-white"
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
          className="py-3 px-4 text-black"
        >
          Get Started
        </Button>
      </div>
      {/* <Cooking /> */}
    </div>
  );
};

export default AboutPage;
