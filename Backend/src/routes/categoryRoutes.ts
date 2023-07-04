import { Router } from "express";
import { categoryController } from "../controllers/index";

const router = Router();

router
  .route("/")
  .post(categoryController.createCategory)
  .get(categoryController.getAllCategory);
router
  .route("/:id")
  .get(categoryController.getCategory)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

export { router as categoryRouter };
