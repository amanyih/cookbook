import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Reputation = sequelize.define("reputation", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  points: {
    type: DataTypes.INTEGER,
  },
  level: {
    type: DataTypes.INTEGER,
  },
});

export default Reputation;
