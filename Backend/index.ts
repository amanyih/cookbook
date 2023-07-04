import app from "./src/app";
import { config } from "./src/config/config";
import sequelize from "./src/db";

sequelize.authenticate().then(() => console.log("Database connected"));

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
