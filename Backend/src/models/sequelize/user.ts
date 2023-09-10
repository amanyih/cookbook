import sequelize from "../../db";
import { DataTypes } from "sequelize";
import Comment from "./comments";
import Recipe from "./recipe";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Recipe, { as: "recipes", foreignKey: "userId" });
Recipe.belongsTo(User, { as: "author", foreignKey: "id" });
export default User;
