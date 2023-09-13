import { Sequelize } from "sequelize";
import { config } from "./config/config";

const sequelize: Sequelize = new Sequelize({
  dialect: "postgres",
  host: config.db.host,
  port: 5432,
  username: "postgres",
  password: "postsqlgre",
  database: "cookbook",
  logging: false,
});

export default sequelize;
