import Sequelize from "sequelize";
import * as sett from "./setting.js";

export const sequelize = new Sequelize(sett.CONNECTION_URL, {
  logging: (...msg) => console.log(msg),
});
