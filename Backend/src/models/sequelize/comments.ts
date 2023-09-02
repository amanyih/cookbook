import sequelize from "../../db";
import { DataTypes } from "sequelize";
import User from "./user";
import Recipe from "./recipe";

const Comment = sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
  },
});

Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Recipe, { foreignKey: "recipeId" });

Recipe.hasMany(Comment);

export default Comment;
