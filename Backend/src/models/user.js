import { sequelize } from "../../db";

import Recipe from "./recipe.js";
import Comment from "./comment.js";
import Reputation from "./reputation.js";
import { Model, DataTypes } from "sequelize";
import Like from "./like.js";

//define user model
class User extends Model {}

User.init(
  {
    userID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validator: {
        isEmail: true,
      },
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    following: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    followers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    profilePicture: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.STRING,
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
  }
);

// User.hasMany(Recipe);
// User.hasMany(Comment);
// User.hasOne(Reputation);
// User.hasMany(Like);

User.addHook("afterCreate", async (user) => {
  await Reputation.create({
    userID: user.userID,
  });
});

sequelize.sync({ force: true });

export default User;
