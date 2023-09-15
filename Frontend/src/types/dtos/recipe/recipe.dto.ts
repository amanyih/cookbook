import AuthorDto from "../author/author";
import CategoryDto from "../category/categoryDto";
import CommentListDto from "../comment/comment.list.dto";
import Nutrition from "../nutrition/nutrition.dto";

class RecipeDto {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  cookingTime: number;
  serving: number;
  tags: string[];
  image: string;
  steps: { title: string; description: string }[];
  nutrition: Nutrition;
  createdAt: Date;
  updatedAt: Date;
  originId: number;
  dishTypeId: number;
  mealCourseId: number;
  dietId: number;
  userId: number;
  authorId: number;
  author: AuthorDto;
  origin: CategoryDto;
  dishType: CategoryDto;
  mealCourse: CategoryDto;
  diet: CategoryDto;
  ratings: any[];
  comments: any[];
  likes: any[];
  isLiked: boolean;

  constructor({
    id,
    title,
    description,
    ingredients,
    cookingTime,
    serving,
    tags,
    image,
    steps,
    nutrition,
    createdAt,
    updatedAt,
    originId,
    dishTypeId,
    mealCourseId,
    dietId,
    userId,
    authorId,
    author,
    origin,
    dishType,
    mealCourse,
    diet,
    ratings,
    comments,
    likes,
    isLiked,
  }: {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    cookingTime: number;
    serving: number;
    tags: string[];
    image: string;
    steps: { title: string; description: string }[];
    nutrition: Nutrition;
    createdAt: Date;
    updatedAt: Date;
    originId: number;
    dishTypeId: number;
    mealCourseId: number;
    dietId: number;
    userId: number;
    authorId: number;
    author: AuthorDto;
    origin: CategoryDto;
    dishType: CategoryDto;
    mealCourse: CategoryDto;
    diet: CategoryDto;
    ratings: any[];
    comments: CommentListDto[];
    likes: any[];
    isLiked: boolean;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.tags = tags;
    this.image = image;
    this.steps = steps;
    this.nutrition = nutrition;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.originId = originId;
    this.dishTypeId = dishTypeId;
    this.mealCourseId = mealCourseId;
    this.dietId = dietId;
    this.userId = userId;
    this.authorId = authorId;
    this.author = author;
    this.origin = origin;
    this.dishType = dishType;
    this.mealCourse = mealCourse;
    this.diet = diet;
    this.ratings = ratings;
    this.comments = comments;
    this.likes = likes;
    this.isLiked = isLiked;
  }
}

export default RecipeDto;
