import { Sequelize } from "sequelize";
import { config } from "./config/config";

const sequelize: Sequelize = new Sequelize(
  "postgres://amanyih:Ze6MgW9ufSrk@ep-yellow-butterfly-75951345.us-east-2.aws.neon.tech/neondb",
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

export default sequelize;
