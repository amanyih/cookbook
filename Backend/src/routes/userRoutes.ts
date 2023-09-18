import { userController } from "../controllers/index";
import { Router } from "express";
import { protect, addUser } from "../middlewares";

const router = Router();

router.route("/:username/recipes").get(addUser, userController.getUserRecipes);
router
  .route("/:username/comments")
  .get(addUser, userController.getUserComments);
router
  .route("/:username/likes")
  .get(addUser, userController.getUserLikedRecipes);

router
  .route("/")
  .post(protect, userController.createUser)
  .get(protect, userController.getAllUsers);
router
  .route("/:id")
  .get(protect, userController.getUser)
  .patch(protect, userController.updateUser)
  .delete(protect, userController.deleteUser);

export { router as userRouter };
