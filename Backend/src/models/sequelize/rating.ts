import sequelize from "../../db";
import { DataTypes } from "sequelize";
import Recipe from "./recipe";
import User from "./user";

const Rating = sequelize.define("rating", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

Rating.belongsTo(User, { as: "user", foreignKey: "userId" });
Rating.belongsTo(Recipe, { as: "recipe", foreignKey: "recipeId" });

Recipe.hasMany(Rating, { as: "ratings", foreignKey: "recipeId" });
User.hasMany(Rating, { as: "ratings", foreignKey: "userId" });

export default Rating;
