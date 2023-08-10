import Author from "./author";
import Comment from "./comment";

class Recipe {
  id: string;
  name: string;
  author: Author;
  image: string;
  title: string;
  description: string;
  rating: number;
  comments: Comment[];
  step: { title: string; description: string }[];
  ingridients: string[];
  nutrition: Nutrition[];
  likes: number;
  cookingTime: number;
  serving: number;
  wouldTakeAgain?: number;

  constructor(
    id: string,
    name: string,
    image: string,
    title: string,
    descritption: string,
    author: Author,
    rating: number,
    comments: Comment[],
    step: { title: string; description: string }[],
    ingridients: string[],
    nutrition: Nutrition[],
    likes: number,
    cookingTime: number,
    serving: number,
    wouldTakeAgain?: number
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.rating = rating;
    this.comments = comments;
    this.step = step;
    this.ingridients = ingridients;
    this.nutrition = nutrition;
    this.likes = likes;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.image = image;
    this.title = title;
    this.description = descritption;
    this.wouldTakeAgain = wouldTakeAgain;
  }
}

interface Nutrition {
  title: string;
  amount: number;
}

export default Recipe;
