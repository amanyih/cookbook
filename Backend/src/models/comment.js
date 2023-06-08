import { Model, DataTypes } from "sequelize";
import User from "./user";
import Recipe from "./recipe";
import { sequelize } from "../../db";
class Comment extends Model {}

Comment.init(
  {
    commentID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    comment: {
      type: DataTypes.STRING,
      notNull: true,
    },
  },
  {
    sequelize,
    modelName: "Comment",
    timestamps: true,
  }
);
sequelize.sync({ force: true });

export default Comment;
