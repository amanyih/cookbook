import { userController } from "../controllers/index";
import { Router } from "express";

const router = Router();

router
  .route("/")
  .post(userController.createUser)
  .get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

export { router as userRouter };
