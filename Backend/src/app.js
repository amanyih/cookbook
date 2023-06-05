import morgan from "morgan";
import express from "express";
import cors from "cors";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
