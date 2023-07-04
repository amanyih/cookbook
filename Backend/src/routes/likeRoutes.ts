import { Router } from "express";
import { likeController } from "../controllers/index";

const router = Router();

router
  .route("/")
  .post(likeController.createLike)
  .get(likeController.getAllLike);
router
  .route("/:id")
  .get(likeController.getLike)
  .patch(likeController.updateLike)
  .delete(likeController.deleteLike);

export { router as likeRouter };
