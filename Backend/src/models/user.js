import { sequelize, DataTypes } from "../../db";
import Recipe from "./recipe.js";
import Comment from "./comment.js";
import Reputation from "./reputation.js";

//define user model

const User = sequelize.define(
  "User",
  {
    userID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.String,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.String,
      allowNull: false,
    },
    email: {
      type: DataTypes.String,
      allowNull: false,
      unique: true,
      validator: {
        isEmail: true,
      },
    },
    favorites: {
      type: DataTypes.Array(DataTypes.String),
    },
    following: {
      type: DataTypes.Array(DataTypes.String),
    },
    followers: {
      type: DataTypes.Array(DataTypes.String),
    },
    profilePicture: {
      type: DataTypes.String,
    },
    bio: {
      type: DataTypes.String,
    },
    isPremium: {
      type: DataTypes.Boolean,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
  }
);

User.hasMany(Recipe);
User.hasMany(Comment);
User.hasOne(Reputation);

User.addHook("afterCreate", async (user) => {
  await Reputation.create({
    userID: user.userID,
  });
});

module.exports = User;
