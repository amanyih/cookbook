import { Router } from "express";
import { recipeController } from "../controllers/index";

const router = Router();

router
  .route("/")
  .post(recipeController.createRecipe)
  .get(recipeController.getAllRecipe);
router
  .route("/:id")
  .get(recipeController.getRecipe)
  .patch(recipeController.updateRecipe)
  .delete(recipeController.deleteRecipe);

router.route("/:id/like").post(recipeController.likeRecipe);
router.route("/:id/rating").post(recipeController.rateRecipe);

export { router as recipeRouter };
