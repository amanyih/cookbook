import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default Category;
