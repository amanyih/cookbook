import { DataTypes, Model } from "sequelize";
import Recipe from "./recipe.js";

class Category extends Model {}

Category.init(
  {
    categoryId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: "Category",
    timestamps: true,
  }
);

module.exports = Category;
