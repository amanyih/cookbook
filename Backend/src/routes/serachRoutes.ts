import { searchController } from "../controllers";
import { Router } from "express";

const router = Router();

router.route("/recipe").get(searchController.searchRecipe);

export { router as searchRouter };
