import { Model, DataTypes } from "sequelize";
import User from "./user.js";

class Reputation extends Model {}

Reputation.init({
  reputationID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.UUID,
    references: {
      model: "User",
      key: "userID",
    },
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  level: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Reputation.belongsTo(User);

module.exports = Reputation;
