import sequelize from "../../db";
import { DataTypes } from "sequelize";

const Like = sequelize.define("like", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  recipeId: {
    type: DataTypes.INTEGER,
  },
});

// sequelize.sync({ force: true });

export default Like;
