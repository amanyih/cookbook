import app from "./src/app";
import { sequelize } from "./db";
import * as sett from "./setting";

// Routes
app.listen(sett.PORT, () => {
  console.log(`Server is running on port: ${sett.PORT}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });
