import { useState } from "react";
import { DropDownSelect } from "../../../../components";

const Categories = ({
  origin,
  dishType,
  diet,
  mealType,
  setOrigin,
  setDishType,
  setDiet,
  setMealType,
}: {
  origin: string;
  dishType: string;
  diet: string;
  mealType: string;
  setOrigin: (value: string) => void;
  setDishType: (value: string) => void;
  setDiet: (value: string) => void;
  setMealType: (value: string) => void;
}) => {
  const origin_categories = [
    "Ethiopian",
    "Italian",
    "Mexican",
    "Chinese",
    "Indian",
    "Thai",
    "French",
    "Japanese",
    "Thai",
  ];
  const dish_type_categories = [
    "Appetizers",
    "Main Courses",
    "Desserts",
    "Salads",
    "Soups",
    "Sandwiches",
    "Breakfast/Brunch",
    "Beverages",
    "Snacks",
  ];
  const dietary_preferences = [
    "Vegetarian",
    "Vegan",
    "Gluten-free",
    "Dairy-free",
    "Low-carb",
    "Nut-free",
    "Sugar-free",
    "Pescatarian",
    "Plant-based",
    "Low-sodium",
  ];
  const meal_course_categories = [
    "Weeknight Dinners",
    "One-Pot Meals",
    "Quick and Easy",
    "Budget-friendly",
    "Family Favorites",
    "Special Occasions",
    "Picnic Ideas",
    "Comfort Food",
    "High-Protein",
    "Low-Calorie",
    "Date Night",
    "Kids' Favorites",
  ];

  return (
    <div>
      <h1 className=" text-3xl font-bold bg-gray-200 p-4 mb-5">Categories</h1>
      <div className="flex flex-wrap">
        <DropDownSelect
          options={origin_categories}
          value={origin}
          onChange={(value) => {
            setOrigin(value.target.value);
          }}
          className="text-2xl"
          label="Origin"
          id="category-origin"
          groupClassName="w-1/2 text-2xl"
        />
        <DropDownSelect
          options={dish_type_categories}
          value={dishType}
          onChange={(value) => {
            setDishType(value.target.value);
          }}
          className="w-1/2 text-2xl"
          label="Dish Type"
          id="category-dish-type"
          groupClassName="w-1/2 text-2xl"
        />
        <DropDownSelect
          options={dietary_preferences}
          value={diet}
          onChange={(value) => {
            setDiet(value.target.value);
          }}
          className="w-1/2 text-2xl"
          label="Diet"
          id="category-dish-type"
          groupClassName="w-1/2 text-2xl"
        />
        <DropDownSelect
          options={meal_course_categories}
          value={mealType}
          onChange={(value) => {
            setMealType(value.target.value);
          }}
          className="w-1/2 text-2xl"
          label="Meal Course"
          id="category-dish-type"
          groupClassName="w-1/2 text-2xl"
        />
      </div>
    </div>
  );
};

export default Categories;
