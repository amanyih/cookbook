import { Router } from "express";
import { commentController } from "../controllers/index";

const router = Router();

router
  .route("/")
  .post(commentController.createComment)
  .get(commentController.getAllComment);
router
  .route("/:id")
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

export { router as commentRouter };
