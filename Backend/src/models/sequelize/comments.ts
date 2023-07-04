import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Comment = sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.STRING,
  },
  recipeId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
});

// sequelize.sync({ force: true });

export default Comment;
