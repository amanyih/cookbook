import express from "express";

import dotenv from "dotenv";
import {
  categoryRouter,
  commentRouter,
  likeRouter,
  reputationRouter,
  userRouter,
  authRouter,
} from "./routes/index";
import RateLimit from "express-rate-limit";
import helmet from "helmet";
import { recipeRouter } from "./routes/recipeRoutes";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();
//rate limit
const limitter = RateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
});

//Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(limitter);

// Routes
//route configs
const prefix = "/api";
const version = "/v1";

app.use((req, res, next) => {
  console.log(req.method, req.url);
  // console.log(req);
  next();
});

app.use(`${prefix}${version}/auth`, authRouter);
app.use(`${prefix}${version}/users`, userRouter);
app.use(`${prefix}${version}/category`, categoryRouter);
app.use(`${prefix}${version}/comment`, commentRouter);
app.use(`${prefix}${version}/like`, likeRouter);
app.use(`${prefix}${version}/reputation`, reputationRouter);
app.use(`${prefix}${version}/recipe`, recipeRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Invalid route",
  });
});

export default app;
