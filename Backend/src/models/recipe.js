import { Model, DataTypes } from "sequelize";

class Recipe extends Model {
  static associate(modles) {
    //asscociation with user
  }
}

Recipe.init({
  associatedUser: {},
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  ingredents: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  country: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  timeTaken: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    max: 5,
    min: 0,
    //max value for rating
  },
});

export default Recipe;
