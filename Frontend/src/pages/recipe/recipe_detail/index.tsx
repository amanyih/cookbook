import {
  RecipeDetailHeader,
  RecipeDetailNumbers,
  Ingredients,
  Steps,
  Nutritions,
  Comments,
} from "./components";

const RecipeDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <RecipeDetailHeader />
      <RecipeDetailNumbers />
      <div className="flex justify-between w-full">
        <div>
          <Ingredients
            ingredients={[
              "1 loaf French bread, cut into 1-inch cubes",
              "8 ounces cream cheese, softened",
              "1 cup sliced fresh strawberries",
              "12 eggs",
              "2 cups milk",
              "1/3 cup maple syrup",
              "1 teaspoon vanilla extract",
              "1/2 teaspoon ground cinnamon",
            ]}
          />
        </div>
        <div>
          <Nutritions
            nutritions={[
              {
                title: "Calories",
                amount: 452,
              },
              {
                title: "Fat",
                amount: 12,
              },
              {
                title: "Protein",
                amount: 12,
              },
              {
                title: "Carbohydrates",
                amount: 12,
              },
            ]}
          />
        </div>
      </div>
      <Steps
        steps={[
          {
            title: "Melt butter",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem ",
          },
          {
            title: "Add bread",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
          },
          {
            title: "Melt butter",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem ",
          },
          {
            title: "Add bread",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
          },
          {
            title: "Melt butter",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem ",
          },
          {
            title: "Add bread",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
          },
          {
            title: "Melt butter",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum. Lorem ",
          },
          {
            title: "Add bread",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
          },
        ]}
      />
      <Comments />
    </div>
  );
};

export default RecipeDetail;
