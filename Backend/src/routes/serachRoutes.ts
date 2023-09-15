import { searchController } from "../controllers";
import { Router } from "express";
import { addUser } from "../middlewares";

const router = Router();

router.route("/recipe").get(addUser, searchController.searchRecipe);

export { router as searchRouter };
