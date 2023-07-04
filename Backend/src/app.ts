import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/index";
import RateLimit from "express-rate-limit";
import helmet from "helmet";

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

app.use(`${prefix}${version}/user`, userRouter);
app.use(`${prefix}${version}/category`, userRouter);
app.use(`${prefix}${version}/comment`, userRouter);
app.use(`${prefix}${version}/like`, userRouter);
app.use(`${prefix}${version}/reputation`, userRouter);

app.use("*", (req, res) => res.send("Hello World!"));

export default app;
