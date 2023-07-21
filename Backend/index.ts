import app from "./src/app";
import { config } from "./src/config/config";
import sequelize from "./src/db";

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (err) {
    console.log(err);
  }
})();

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
