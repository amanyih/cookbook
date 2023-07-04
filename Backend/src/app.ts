import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/index";

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", router);
app.use("*", (req, res) => res.send("Hello World!"));

export default app;
