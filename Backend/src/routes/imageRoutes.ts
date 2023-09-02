import { Router } from "express";
import { imageController } from "../controllers";
import { uploadImage } from "../middlewares";

const router = Router();

router
  .route("/")
  .post(uploadImage, imageController.createImage)
  .get(imageController.getAllImage);
router
  .route("/:id")
  .get(imageController.getImage)
  .patch(imageController.updateImage)
  .delete(imageController.deleteImage);

export { router as imageRouter };
