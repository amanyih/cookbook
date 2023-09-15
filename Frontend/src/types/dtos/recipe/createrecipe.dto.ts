import Nutrition from "../nutrition/nutrition.dto";
class CreateRecipeDto {
  title: string;
  description: string;
  ingredients: string[];
  cookingTime: number;
  serving: number;
  tags: string[];
  image: string;
  steps: { title: string; description: string }[];
  origin: string;
  mealcourse: string;
  diet: string;
  dishtype: string;
  nutrition: Nutrition;

  constructor({
    title,
    description,
    ingredients,
    cookingTime,
    serving,
    tags,
    image,
    steps,
    origin,
    mealcourse,
    diet,
    dishtype,
    nutrition,
  }: {
    title: string;
    description: string;
    ingredients: string[];
    cookingTime: number;
    serving: number;
    tags: string[];
    image: string;
    steps: { title: string; description: string }[];
    origin: string;
    mealcourse: string;
    diet: string;
    dishtype: string;
    nutrition: Nutrition;
  }) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.tags = tags;
    this.image = image;
    this.steps = steps;
    this.origin = origin;
    this.mealcourse = mealcourse;
    this.diet = diet;
    this.dishtype = dishtype;
    this.nutrition = nutrition;
  }
}

export default CreateRecipeDto;
