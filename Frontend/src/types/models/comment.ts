import Author from "./author";
class Comment {
  id: string;
  author: Author;
  content: string;
  likes: number;

  constructor(id: string, author: Author, content: string, likes: number = 0) {
    this.id = id;
    (this.author = author), (this.content = content), (this.likes = likes);
  }
}

export default Comment;
