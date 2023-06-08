import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../db";

class Like extends Model {}

Like.init(
  {
    likeID: {
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
  },
  {
    sequelize,
    modelName: "Like",
    timestamps: true,
  }
);

// Like.belongsTo(User);
sequelize.sync({ force: true });

export default Like;
