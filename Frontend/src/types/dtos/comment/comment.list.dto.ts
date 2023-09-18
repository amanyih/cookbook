import AuthorDto from "../author/author";

class CommentListDto {
  public id: number;
  public content: string;
  public createdAt: Date;
  public updatedAt: Date;
  public userId: number;
  public recipeId: number;
  user: AuthorDto;
  likes: any[];
  isLiked: boolean;

  constructor({
    id,
    content,
    createdAt,
    updatedAt,
    userId,
    recipeId,
    user,
    likes,
    isLiked = false,
  }: {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    recipeId: number;
    user: AuthorDto;
    likes: any[];
    isLiked: boolean;
  }) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.recipeId = recipeId;
    this.user = user;
    this.likes = likes;
    this.isLiked = isLiked;
  }
}

export default CommentListDto;
