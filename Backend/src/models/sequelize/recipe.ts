import sequelize from "../../db";
import { Diet, DishType, MealCourse, Origin } from "./categories";
import { DataTypes } from "sequelize";

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
  userId: {
    type: DataTypes.INTEGER,
  },
});

Recipe.belongsTo(Origin, { foreignKey: "originId" });
Recipe.belongsTo(DishType, { foreignKey: "dishTypeId" });
Recipe.belongsTo(MealCourse, { foreignKey: "mealcourseId" });
Recipe.belongsTo(Diet, { foreignKey: "dietId" });

export default Recipe;
