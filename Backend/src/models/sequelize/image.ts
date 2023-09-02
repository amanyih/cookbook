import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Image = sequelize.define("image", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
  },
});

export default Image;
