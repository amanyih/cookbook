// import { reputationController } from "../controllers/indexController";
import * as reputationController from "../controllers/reputationController";
import express from "express";

const router = express.Router();

router.route("/").get(reputationController.getAllReputations);
// .post(reputationController.createReputation);

router
  .route("/:id")
  .get(reputationController.getReputation)
  .patch(reputationController.updateReputaion);

export default router;
