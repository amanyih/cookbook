import { Model, DataTypes } from "sequelize";

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
    recipeID: {
      type: DataTypes.UUID,
      references: {
        model: "Recipe",
        key: "recipeID",
      },
    },
  },
  {
    sequelize,
    modelName: "Like",
    timestamps: true,
  }
);

Like.belongsTo(User);
