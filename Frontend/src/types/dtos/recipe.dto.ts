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
  steps: {
    description: string;
    title: string;
  }[];
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
    steps: {
      description: string;
      title: string;
    }[],
    image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
