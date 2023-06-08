import * as express from "express";
// import { userController } from "../controllers/indexController";
import * as userController from "../controllers/userController";

const router = express.Router();

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser);

export default router;
