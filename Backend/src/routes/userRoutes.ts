import { userController } from "../controllers/index";
import { Router } from "express";
import { protect } from "../middlewares";

const router = Router();

router
  .route("/")
  .post(userController.createUser)
  .get(protect, userController.getAllUsers);
router
  .route("/:id")
  .get(protect, userController.getUser)
  .patch(protect, userController.updateUser)
  .delete(protect, userController.deleteUser);

export { router as userRouter };
