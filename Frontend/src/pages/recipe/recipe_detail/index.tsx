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
    <div>
      <RecipeDetailHeader />
      <div className="flex">
        <div>
          <RecipeDetailNumbers />
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
          <Steps
            steps={[
              {
                title: "melt butter",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
              },
              {
                title: " add bread",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum.",
              },
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
      <Comments />
    </div>
  );
};

export default RecipeDetail;
