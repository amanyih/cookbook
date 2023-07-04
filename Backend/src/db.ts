import { Sequelize } from "sequelize";
import { config } from "./config/config";

const sequelize: Sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postsqlgre",
  database: "cookbook",
  logging: false,
});

sequelize.sync({ force: true });

export default sequelize;
