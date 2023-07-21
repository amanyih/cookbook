import express from "express";
import dotenv from "dotenv";
import {
  categoryRouter,
  commentRouter,
  likeRouter,
  reputationRouter,
  userRouter,
} from "./routes/index";
import RateLimit from "express-rate-limit";
import helmet from "helmet";
import { recipeRouter } from "./routes/recipeRoutes";

dotenv.config({ path: "./.env" });

const app = express();
//rate limit
const limitter = RateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
});

//Middlewares
// app.use(cors())
app.use(helmet());
app.use(express.json());
app.use(limitter);

// Routes
//route configs
const prefix = "/api";
const version = "/v1";

app.use(`${prefix}${version}/users`, userRouter);
app.use(`${prefix}${version}/category`, categoryRouter);
app.use(`${prefix}${version}/comment`, commentRouter);
app.use(`${prefix}${version}/like`, likeRouter);
app.use(`${prefix}${version}/reputation`, reputationRouter);
app.use(`${prefix}${version}/recipe`, recipeRouter);

app.use("*", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.originalUrl);
  res.status(404).json({
    status: "fail",
    message: "Invalid route",
  });
});

export default app;
