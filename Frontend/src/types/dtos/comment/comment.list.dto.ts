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

  constructor({
    id,
    content,
    createdAt,
    updatedAt,
    userId,
    recipeId,
    user,
    likes,
  }: {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    recipeId: number;
    user: AuthorDto;
    likes: any[];
  }) {
    this.id = id;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.userId = userId;
    this.recipeId = recipeId;
    this.user = user;
    this.likes = likes;
  }
}

export default CommentListDto;
