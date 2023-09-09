class RecipeDto {
  title: string;
  description: string;
  ingredients: string[];

  origin: string;
  diet: string;
  dishtype: string;
  mealcourse: string;

  cookingTime: number;
  serving: number;
  tags: string[];
  image: string;
  steps: string[];
  userId: string;

  constructor(
    title: string,
    description: string,
    ingredients: string[],

    orgin: string,
    diet: string,
    dishtype: string,
    mealcourse: string,

    cookingTime: number,
    serving: number,
    tags: string[],
    steps: string[],
    image = "",
    userId = "1"
  ) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.tags = tags;
    this.image = image;
    this.steps = steps;
    this.origin = orgin;
    this.diet = diet;
    this.dishtype = dishtype;
    this.mealcourse = mealcourse;
    this.userId = userId;
  }
}

export default RecipeDto;
