import { Sequelize } from "sequelize";
import { config } from "./config/config";

const sequelize: Sequelize = new Sequelize(config.db.url!, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
