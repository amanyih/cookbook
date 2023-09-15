class CreateCommentDto {
  content: string;
  recipeId: number;

  constructor({ content, recipeId }: { content: string; recipeId: number }) {
    this.content = content;
    this.recipeId = recipeId;
  }
}

export default CreateCommentDto;
