import { HiOutlineLightBulb } from "react-icons/hi";
import { BsPatchCheck, BsPeople, BsHeartPulse } from "react-icons/bs";
import { Grid } from "../../../../components";

const visionsandvalues = [
  {
    title: "Quality",
    description:
      "Curating and testing recipes for accuracy, reliability, and delectable results.",
    icon: <BsPatchCheck />,
  },
  {
    title: "Inspiration",
    description:
      "Fostering creativity and exploration through diverse recipes, tips, and resources.",
    icon: <HiOutlineLightBulb />,
  },
  {
    title: "Community",
    description:
      "Building a vibrant community where food enthusiasts connect, share, and support.",
    icon: <BsPeople />,
  },
  {
    title: "Health and Sustainability",
    description:
      "Promoting healthy eating and sustainable practices for well-being and the environment.",
    icon: <BsHeartPulse />,
  },
];

const ValuesItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="
    rounded-lg
    bg-white
    shadow-lg
    p-5
    flex
    flex-col
    justify-between
    items-center
    space-y-5
    hover:shadow-2xl
    transition
    duration-200
    ease-in-out
    dark:bg-gray-700
    cursor-pointer
   

    "
    >
      <div
        className="
        rounded-full
        bg-
        text-primary-400
        w-32
        h-32
        flex
        justify-center
        items-center
        text-7xl
        
      "
      >
        {icon}
      </div>
      <h1
        className="
        text-2xl
        font-semibold
        text-gray-800
        dark:text-gray-50
        text-center
        
      "
      >
        {title}
      </h1>
      <p
        className="
        text-gray-600
        dark:text-gray-300
        text-center
        px-5
        
      "
      >
        {description}
      </p>
    </div>
  );
};

const VisionValues = () => {
  return (
    <div
      className="
    flex
    flex-col
    justify-center
    items-center
    space-y-5
    w-full
    px-10
    py-20
    bg-gray-100
    dark:bg-gray-800
    mb-10
    "
    >
      <h1 className=" text-5xl text-gray-800 dark:text-gray-50 font-semibold mb-10 text-center">
        Our Vision and Values
      </h1>
      <Grid
        items={visionsandvalues.map((item) => (
          <ValuesItem
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      />
    </div>
  );
};

export default VisionValues;
