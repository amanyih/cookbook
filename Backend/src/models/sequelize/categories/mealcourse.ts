import sequelize from "../../../db";
import { DataTypes } from "sequelize";

const MealCourse = sequelize.define("mealcourse", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default MealCourse;
