import { Model, DataTypes } from "sequelize";
import User from "./user.js";
import Comment from "./comment.js";
import Category from "./category.js";

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
    userID: {
      type: DataTypes.UUID,
      references: {
        model: "User",
        key: "userID",
      },
    },
    categoryId: {
      type: DataTypes.UUID,
      references: {
        model: "Category",
        key: "categoryId",
      },
    },
    country: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.UUID,
      references: {
        model: "Like",
        key: "likeID",
      },
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
Recipe.belongsTo(Category);

export default Recipe;
