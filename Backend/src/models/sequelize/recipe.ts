import sequelize from "../../db";
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
  time: {
    type: DataTypes.INTEGER,
  },
  difficulty: {
    type: DataTypes.ENUM("easy", "medium", "hard"),
  },
  userId: {
    type: DataTypes.INTEGER,
  },
});

export default Recipe;
