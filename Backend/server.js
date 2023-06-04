import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as sett from "./setting.js";
import { Sequelize } from "sequelize";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
const sequelize = new Sequelize(sett.CONNECTION_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
  });

// Routes
app.listen(sett.PORT, () => {
  console.log(`Server is running on port: ${sett.PORT}`);
});
