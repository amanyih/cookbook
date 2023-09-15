import { Router } from "express";
import { categoryController } from "../controllers/index";
import { protect } from "../middlewares";

const router = Router();

//origin
router
  .route("/origin")
  .post(protect, categoryController.createOrigin)
  .get(categoryController.getAllOrigins);
router
  .route("/origin/:id")
  .get(categoryController.getOrigin)
  .patch(protect, categoryController.updateOrigin)
  .delete(protect, categoryController.deleteOrigin);

//diet
router
  .route("/diet")
  .post(protect, categoryController.createDiet)
  .get(categoryController.getAllDiets);
router
  .route("/diet/:id")
  .get(categoryController.getDiet)
  .patch(protect, categoryController.updateDiet)
  .delete(protect, categoryController.deleteDiet);

//mealcourse
router
  .route("/mealcourse")
  .post(protect, categoryController.createMealCourse)
  .get(categoryController.getAllMealCourses);
router
  .route("/mealcourse/:id")
  .get(categoryController.getMealCourse)
  .patch(protect, categoryController.updateMealCourse)
  .delete(protect, categoryController.deleteMealCourse);

//dishtype
router
  .route("/dishtype")
  .post(protect, categoryController.createDishType)
  .get(categoryController.getAllDishTypes);
router
  .route("/dishtype/:id")
  .get(categoryController.getDishType)
  .patch(protect, categoryController.updateDishType)
  .delete(protect, categoryController.deleteDishType);

router.get("/name/:name", categoryController.getCategoryByName);

export { router as categoryRouter };
