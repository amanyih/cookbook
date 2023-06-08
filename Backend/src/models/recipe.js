import { Model, DataTypes } from "sequelize";
import User from "./user";
import Comment from "./comment";
import Category from "./category";
import { sequelize } from "../../db";

class Recipe extends Model {}

Recipe.init(
  {
    recpieID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    ingredents: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    country: {
      type: DataTypes.STRING,
    },

    views: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    timeTaken: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      max: 5,
      min: 0,
      //max value for rating
    },
  },
  {
    sequelize,
    modelName: "Recipe",
    timestamps: true,
  }
);

Recipe.belongsTo(User);
Recipe.hasMany(Comment);
// Recipe.belongsTo(Category);
sequelize.sync({ force: true });

export default Recipe;
