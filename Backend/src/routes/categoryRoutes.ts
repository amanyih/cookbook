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
  .patch(categoryController.updateOrigin)
  .delete(categoryController.deleteOrigin);

//diet
router
  .route("/diet")
  .post(categoryController.createDiet)
  .get(categoryController.getAllDiets);
router
  .route("/diet/:id")
  .get(categoryController.getDiet)
  .patch(categoryController.updateDiet)
  .delete(categoryController.deleteDiet);

//mealcourse
router
  .route("/mealcourse")
  .post(categoryController.createMealCourse)
  .get(categoryController.getAllMealCourses);
router
  .route("/mealcourse/:id")
  .get(categoryController.getMealCourse)
  .patch(categoryController.updateMealCourse)
  .delete(categoryController.deleteMealCourse);

//dishtype
router
  .route("/dishtype")
  .post(categoryController.createDishType)
  .get(categoryController.getAllDishTypes);
router
  .route("/dishtype/:id")
  .get(categoryController.getDishType)
  .patch(categoryController.updateDishType)
  .delete(categoryController.deleteDishType);

export { router as categoryRouter };
