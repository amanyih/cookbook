import { Router } from "express";
import { imageController } from "../controllers";
import { addUser, protect, uploadImage } from "../middlewares";

const router = Router();

router
  .route("/")
  .post(protect, uploadImage, imageController.createImage)
  .get(addUser, imageController.getAllImage);
router
  .route("/:id")
  .get(addUser, imageController.getImage)
  .patch(protect, imageController.updateImage)
  .delete(protect, imageController.deleteImage);

export { router as imageRouter };
