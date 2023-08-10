class RecipeDto {
  title: string;
  description: string;
  ingredients: string[];
  category: {
    orgin: string;
    diet: string;
    "dish-type": string;
    "meal-course": string;
  };
  cookingTime: number;
  serving: number;
  tags: string[];
  image: string;
  steps: { title: string; description: string }[];

  constructor(
    title: string,
    description: string,
    ingredients: string[],
    category: {
      orgin: string;
      diet: string;
      "dish-type": string;
      "meal-course": string;
    },
    cookingTime: number,
    serving: number,
    tags: string[],
    steps: { title: string; description: string }[],
    image = ""
  ) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.category = category;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.tags = tags;
    this.image = image;
    this.steps = steps;
  }
}

export default RecipeDto;
