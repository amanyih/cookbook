// import { recipeController } from "../controllers/indexController";
import * as recipeController from "../controllers/recipeController";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(recipeController.getAllRecipes)
  .post(recipeController.createRecipe);

router
  .route("/:id")
  .get(recipeController.getRecipe)
  .patch(recipeController.updateRecipe);

export default router;
