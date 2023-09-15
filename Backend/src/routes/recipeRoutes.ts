import { Router } from "express";
import { recipeController } from "../controllers/index";
import { protect, addUser } from "../middlewares";

const router = Router();

router
  .route("/")
  .post(protect, recipeController.createRecipe)
  .get(addUser, recipeController.getAllRecipe);
router
  .route("/:id")
  .get(addUser, recipeController.getRecipe)
  .patch(protect, recipeController.updateRecipe)
  .delete(protect, recipeController.deleteRecipe);

router.route("/:id/like").post(protect, recipeController.likeRecipe);
router.route("/:id/rating").post(protect, recipeController.rateRecipe);

export { router as recipeRouter };
