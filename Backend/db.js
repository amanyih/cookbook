import Sequelize from "sequelize";
import * as sett from "./setting.js";

export const sequelize = new Sequelize(sett.DB, sett.USER, sett.PASSWORD, {
  host: sett.HOST,
  dialect: "postgres",
});
