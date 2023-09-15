import { Router } from "express";
import { profileController } from "../controllers";
import { protect, addUser } from "../middlewares";

const router = Router();

router
  .route("/:id")
  .get(addUser, profileController.getProfile)
  .patch(protect, profileController.updateProfile)
  .delete(protect, profileController.deleteProfile);

export default router;
