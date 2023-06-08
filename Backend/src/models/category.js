import { DataTypes, Model } from "sequelize";
import Recipe from "./recipe.js";
import { sequelize } from "../../db";

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

Category.hasMany(Recipe);
sequelize.sync({ force: true });

export default Category;
