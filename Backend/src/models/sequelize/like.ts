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

User.belongsToMany(Recipe, { through: Like, foreignKey: "userId" });
User.belongsToMany(Comment, { through: Like, foreignKey: "userId" });

Recipe.belongsToMany(User, { through: Like, foreignKey: "recipeId" });
Comment.belongsToMany(User, { through: Like, foreignKey: "commentId" });

export default Like;
