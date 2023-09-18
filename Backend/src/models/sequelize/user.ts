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
  email: {
    type: DataTypes.STRING, //make email unique
  },
  password: {
    type: DataTypes.STRING,
  },
  username: {
    type: DataTypes.STRING, //make username unique
    unique: true,
  },
});

User.hasMany(Recipe, { as: "recipes", foreignKey: "userId" });
Recipe.belongsTo(User, { as: "author", foreignKey: "authorId" });
export default User;
