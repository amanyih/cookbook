import { Router } from "express";
import { profileController } from "../controllers";
import { protect, addUser } from "../middlewares";

const router = Router();

router
  .route("/change-password")
  .patch(protect, profileController.changePassword);

router
  .route("/:id")
  .patch(protect, profileController.updateProfile)
  .delete(protect, profileController.deleteProfile);

router.route("/:username").get(profileController.getProfile);

export default router;
