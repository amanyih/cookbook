import { Router } from "express";
import { commentController } from "../controllers/index";
import { addUser, protect } from "../middlewares";

const router = Router();

router
  .route("/")
  .post(protect, commentController.createComment)
  .get(addUser, commentController.getAllComment);
router
  .route("/:id")
  .get(addUser, commentController.getComment)
  .patch(protect, commentController.updateComment)
  .delete(protect, commentController.deleteComment);

router.route("/:id/like").post(protect, commentController.likeComment);

export { router as commentRouter };
