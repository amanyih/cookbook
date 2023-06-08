import morgan from "morgan";
import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes";
import commentRoutes from "./routes/commentRoutes";
import recipeRoutes from "./routes/recipeRoutes";
import reputationRoutes from "./routes/reputationRoutes";
import userRoute from "./routes/userRoute";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const prefix = "/api/v1";
// Routes
// app.use(`${prefix}/category`, categoryRoutes);
// app.use(`${prefix}/comment`, commentRoutes);
// app.use(`${prefix}/recipe`, recipeRoutes);
// app.use(`${prefix}/reputation`, reputationRoutes);
app.use(`${prefix}/user`, userRoute);

app.all("*", (req, res, next) => {
  //TODO: better error handling
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on this server`,
  });
});

export default app;
