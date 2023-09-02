import sequelize from "../../../db";
import { DataTypes } from "sequelize";

const Origin = sequelize.define("origin", {
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

export default Origin;
