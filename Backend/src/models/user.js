import { sequelize, DataTypes } from "../../db";

//define user model

const User = sequelize.define(
  "User",
  {
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

module.exports = User;
