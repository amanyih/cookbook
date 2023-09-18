import AuthorDto from "../author/author";

class RecipeListDto {
  id: number;
  title: string;
  description: string;
  cookingTime: number;
  serving: number;
  image: string;
  createdAt: Date;
  author: AuthorDto;
  comments: number;
  likes: number;
  rating: number;
  isLiked: boolean;
  categories: string[];
  constructor({
    id,
    title,
    description,
    cookingTime,
    serving,
    image,
    createdAt,
    author,
    comments,
    likes,
    rating,
    isLiked,
    categories,
  }: {
    id: number;
    title: string;
    description: string;
    cookingTime: number;
    serving: number;
    image: string;
    createdAt: Date;
    author: AuthorDto;
    comments: number;
    likes: number;
    rating: number;
    isLiked: boolean;
    categories: string[];
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.cookingTime = cookingTime;
    this.serving = serving;
    this.image = image;
    this.createdAt = createdAt;
    this.author = author;
    this.comments = comments;
    this.likes = likes;
    this.rating = rating;
    this.isLiked = isLiked;
    this.categories = categories;
  }
}

export default RecipeListDto;
