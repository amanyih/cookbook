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
    type: DataTypes.TEXT,
  },
  ingredients: {
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
    type: DataTypes.TEXT,
  },
  steps: {
    type: DataTypes.JSONB,
    defaultValue: [],
    validate: {
      validateSteps(value: any) {
        if (!Array.isArray(value)) {
          throw new Error("Steps must be an array.");
        }
        for (const step of value) {
          if (
            !step.title ||
            typeof step.title !== "string" ||
            step.title.length > 50
          ) {
            throw new Error(
              "Each step must have a title as a string with a maximum length of 50 characters."
            );
          }
          if (!step.description || typeof step.description !== "string") {
            throw new Error("Each step must have a description as a string.");
          }
        }
      },
    },
  },
  nutrition: {
    type: DataTypes.JSONB,
    defaultValue: {
      calories: 0,
      fat: 0,
      protein: 0,
      carbs: 0,
      sugar: 0,
    },
    validate: {
      validateNutrition(value: any) {
        console.log("value-------", value);
        if (typeof value !== "object") {
          throw new Error("Nutrition must be an object.");
        }
        if (
          value.calories === null ||
          value.fat == null ||
          value.protein == null ||
          value.carbs == null ||
          value.sugar == null
        ) {
          throw new Error(
            "Nutrition must have calories, fat, protein, carbs and sugar."
          );
        }

        if (
          typeof value.calories !== "number" ||
          typeof value.fat !== "number" ||
          typeof value.protein !== "number" ||
          typeof value.carbs !== "number" ||
          typeof value.sugar !== "number"
        ) {
          throw new Error(
            "Values of Calories, fat, protein, carbs and sugar must be numbers."
          );
        }

        if (
          value.calories < 0 ||
          value.fat < 0 ||
          value.protein < 0 ||
          value.carbs < 0 ||
          value.sugar < 0
        ) {
          throw new Error(
            "Calories, fat, protein, carbs and sugar must be positive numbers."
          );
        }
      },
    },
  },
});

Origin.hasMany(Recipe, { as: "recipes", foreignKey: "originId" });
DishType.hasMany(Recipe, { as: "recipes", foreignKey: "dishTypeId" });
MealCourse.hasMany(Recipe, { as: "recipes", foreignKey: "mealcourseId" });
Diet.hasMany(Recipe, { as: "recipes", foreignKey: "dietId" });
Recipe.belongsTo(Origin);
Recipe.belongsTo(DishType, { foreignKey: "dishTypeId" });
Recipe.belongsTo(MealCourse, { foreignKey: "mealcourseId" });
Recipe.belongsTo(Diet, { foreignKey: "dietId" });

export default Recipe;
