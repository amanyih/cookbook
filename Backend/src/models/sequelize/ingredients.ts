import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Ingredient = sequelize.define("ingredient", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

export default Ingredient;
