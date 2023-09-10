import sequelize from "../../db";
import { Diet, DishType, MealCourse, Origin } from "./categories";
import Comment from "./comments";
import { DataTypes } from "sequelize";
import User from "./user";

const Recipe = sequelize.define("recipe", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  ingredients: {
    //type: DataTypes.ARRAY(DataTypes.STRING),
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  cookingTime: {
    type: DataTypes.INTEGER,
  },
  serving: {
    type: DataTypes.INTEGER,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  image: {
    type: DataTypes.STRING,
  },
  steps: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});

Recipe.belongsTo(Origin);
Origin.hasMany(Recipe, { as: "recipes", foreignKey: "originId" });
Recipe.belongsTo(DishType, { foreignKey: "dishTypeId" });
Recipe.belongsTo(MealCourse, { foreignKey: "mealcourseId" });
Recipe.belongsTo(Diet, { foreignKey: "dietId" });

export default Recipe;
