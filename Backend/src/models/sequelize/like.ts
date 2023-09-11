import sequelize from "../../db";
import { DataTypes } from "sequelize";
import User from "./user";
import Recipe from "./recipe";
import Comment from "./comments";

const Like = sequelize.define("like", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  recipeId: {
    type: DataTypes.INTEGER,
  },
  commentId: {
    type: DataTypes.INTEGER,
  },
});

Recipe.hasMany(Like, { as: "likes", foreignKey: "recipeId" });
Like.belongsTo(Recipe, { as: "recipe", foreignKey: "recipeId" });

User.hasMany(Like, { as: "likes", foreignKey: "userId" });
Like.belongsTo(User, { as: "user", foreignKey: "userId" });

Comment.hasMany(Like, { as: "likes", foreignKey: "commentId" });
Like.belongsTo(Comment, { as: "comment", foreignKey: "commentId" });

export default Like;
