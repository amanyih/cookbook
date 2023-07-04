import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/index";

dotenv.config({ path: "./.env" });

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
//route configs
const prefix = "/api";
const version = "/v1";

app.use(`${prefix}${version}/user`, userRouter);
app.use(`${prefix}${version}/category`, userRouter);
app.use(`${prefix}${version}/comment`, userRouter);
app.use(`${prefix}${version}/like`, userRouter);
app.use(`${prefix}${version}/reputation`, userRouter);

app.use("*", (req, res) => res.send("Hello World!"));

export default app;
