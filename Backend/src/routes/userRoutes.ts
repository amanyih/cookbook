import { userController } from "../controllers/index";
import { Router } from "express";

const router = Router();

router.post("/", userController.createUser);

export default router;
