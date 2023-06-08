// import { commentController } from "../controllers/indexController";
import * as commentController from "../controllers/commentController";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.createComment);
router
  .route("/:id")
  .get(commentController.getComment)
  .patch(commentController.updateComment);

export default router;
