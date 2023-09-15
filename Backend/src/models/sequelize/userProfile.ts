import sequelize from "../../db";
import { DataTypes } from "sequelize";
import User from "./user";

const UserProfile = sequelize.define("userProfile", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  bio: {
    type: DataTypes.STRING,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

UserProfile.belongsTo(User, { as: "user", foreignKey: "userId" });
User.hasOne(UserProfile, { as: "profile", foreignKey: "userId" });

export default UserProfile;
