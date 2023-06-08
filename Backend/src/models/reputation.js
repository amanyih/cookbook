import { Model, DataTypes } from "sequelize";
import User from "./user.js";
import { sequelize } from "../../db";

class Reputation extends Model {}

Reputation.init(
  {
    reputationID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Reputation",
    timestamps: true,
  }
);

// Reputation.belongsTo(User);
sequelize.sync({ force: true });

export default Reputation;
