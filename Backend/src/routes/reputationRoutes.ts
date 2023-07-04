import { Router } from "express";
import { reputationController } from "../controllers/index";

const router = Router();

router
  .route("/")
  .post(reputationController.createReputation)
  .get(reputationController.getAllReputation);
router
  .route("/:id")
  .get(reputationController.getReputation)
  .patch(reputationController.updateReputation)
  .delete(reputationController.deleteReputation);

export { router as reputationRouter };
