import { Model, DataTypes } from "sequelize";
import User from "./user.js";

class Comment extends Model {}

Comment.init(
  {
    commentID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.UUID,
      references: {
        model: "User",
        key: "userID",
      },
    },
    recipeID: {
      type: DataTypes.UUID,
      references: {
        model: "Recipe",
        key: "recipeID",
      },
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

Comment.belongsTo(User);
Comment.belongsTo(Recipe);

module.exports = Comment;
