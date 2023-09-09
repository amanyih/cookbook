import { Grid, CategoryCard } from "../../../components";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/useHttp";

const CategoriesSections = () => {
  const { sendRequest: getCategories } = useHttp();
  const [origin, setOrigin] = useState<any[]>([]);
  const [dishType, setDishType] = useState<any[]>([]);
  const [diet, setDiet] = useState<any[]>([]);
  const [mealType, setMealType] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async (
      url: string,
      setter: (value: any[]) => void,
      category: string
    ) => {
      const categories = await getCategories({
        url: "/category" + url,
      });
      setter(categories["data"][category]);
    };
    fetchCategories("/origin", setOrigin, "origins");
    fetchCategories("/dishtype", setDishType, "dishtypes");
    fetchCategories("/diet", setDiet, "diets");
    fetchCategories("/mealcourse", setMealType, "mealcourses");
  }, []);

  return (
    <div className="w-full">
      {origin.length > 0 && (
        <Grid
          title="Origin"
          description="Cuisines from all over the world. Enjoy the taste of different cultures."
          items={origin.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        />
      )}
      {dishType.length > 0 && (
        <Grid
          title="Dish Type"
          description="Find recipes based on the type of dish. From appetizers to desserts. We have it all."
          items={dishType.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        />
      )}

      {diet.length > 0 && (
        <Grid
          title="Diet"
          description="Find recipes that fit your diet. No matter what diet you follow, we have it all."
          items={diet.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        />
      )}

      {mealType.length > 0 && (
        <Grid
          title="Meal Course"
          description="Explore different meal courses. From breakfast to dinner. We have it all."
          items={mealType.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        />
      )}
    </div>
  );
};

export default CategoriesSections;
