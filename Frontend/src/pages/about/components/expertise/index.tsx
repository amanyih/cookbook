// At [Your Recipe Sharing Website], we take pride in the expertise and qualifications of our dedicated team of culinary professionals. Our team consists of:

// Professional Chefs: Our team includes highly skilled and experienced professional chefs who bring a wealth of culinary knowledge and expertise to our platform. They have honed their skills in renowned culinary institutes and have worked in reputable restaurants, ensuring the quality and authenticity of the recipes featured on our website.

// Nutritionists: We collaborate with registered nutritionists who provide valuable insights and guidance on creating balanced and nutritious recipes. Their expertise ensures that our platform offers recipes that promote healthy eating habits and cater to various dietary needs.

// Experienced Food Bloggers: We partner with experienced food bloggers who have established themselves as trusted sources in the culinary world. Their passion for food, extensive recipe testing, and engaging storytelling contribute to the diverse range of recipes and content available on our platform.

import { SectionTitle } from "../../../../components";

const items = [
  {
    title: "Professional Chefs",
    description:
      "Our team includes highly skilled and experienced professional chefs who bring a wealth of culinary knowledge and expertise to our platform. They have honed their skills in renowned culinary institutes and have worked in reputable restaurants, ensuring the quality and authenticity of the recipes featured on our website.",
    image:
      "https://eurokera.com/wp-content/uploads/2019/06/professional_lifestyle_kitchen_crew_dressing_plates-copy-2.jpg",
  },
  {
    title: "Nutritionists",
    description:
      "We collaborate with registered nutritionists who provide valuable insights and guidance on creating balanced and nutritious recipes. Their expertise ensures that our platform offers recipes that promote healthy eating habits and cater to various dietary needs.",
    image:
      "https://dohertynutrition.com/wp-content/uploads/2022/04/group-768x512.jpeg",
  },
  {
    title: "Experienced Food Bloggers",
    description:
      "We partner with experienced food bloggers who have established themselves as trusted sources in the culinary world. Their passion for food, extensive recipe testing, and engaging storytelling contribute to the diverse range of recipes and content available on our platform.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhmYI8ZRyYYGObPav4G5s3sd7eLXfqd8mYkiQqXTjolYU_Lr6pC5kfD4ojG_3uL_OkbHbJeNO8BeRksYGjvSAwSGCE4TxcxJRVEqajeAU7WzlezyGKTjB1mIUzkb7F6AiDBhmW5tBZ-xrVE1ou3ooCy_fcLIA6lYYFTquITbTiPtiE1SQxibn8rQEo/s6016/DSC_1434.JPG",
  },
];

const ExpertiseItem = ({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } justify-between items-center space-x-10 mb-10`}
    >
      <div className="w-1/2">
        <img
          src={image}
          alt=""
          className="rounded-lg shadow-lg hover:shadow-2xl transition duration-200 ease-in-out"
        />
      </div>
      <div className="w-1/2">
        <h1 className=" text-4xl font-semibold text-gray-800 dark:text-gray-50 mb-5">
          {title}
        </h1>
        <p className=" text-gray-600 dark:text-gray-300 text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

const Expertise = () => {
  return (
    <div className="w-full">
      <SectionTitle title="Expertise and Credibility" />
      <div>
        {items.map((item, index) => (
          <ExpertiseItem
            key={index}
            title={item.title}
            index={index}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
