import sequelize from "../../db";
import { DATE, DataTypes } from "sequelize";

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

export default Recipe;
