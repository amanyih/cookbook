import { Router } from "express";
import { categoryController } from "../controllers/index";
import { addUser, protect } from "../middlewares";

const router = Router();

router.route("/popular").get(addUser, categoryController.getPopularCategories);

//origin
router
  .route("/origin")
  .post(protect, categoryController.createOrigin)
  .get(addUser, categoryController.getAllOrigins);
router
  .route("/origin/:id")
  .get(addUser, categoryController.getOrigin)
  .patch(protect, categoryController.updateOrigin)
  .delete(protect, categoryController.deleteOrigin);

//diet
router
  .route("/diet")
  .post(protect, categoryController.createDiet)
  .get(addUser, categoryController.getAllDiets);
router
  .route("/diet/:id")
  .get(addUser, categoryController.getDiet)
  .patch(protect, categoryController.updateDiet)
  .delete(protect, categoryController.deleteDiet);

//mealcourse
router
  .route("/mealcourse")
  .post(protect, categoryController.createMealCourse)
  .get(addUser, categoryController.getAllMealCourses);
router
  .route("/mealcourse/:id")
  .get(addUser, categoryController.getMealCourse)
  .patch(protect, categoryController.updateMealCourse)
  .delete(protect, categoryController.deleteMealCourse);

//dishtype
router
  .route("/dishtype")
  .post(protect, categoryController.createDishType)
  .get(addUser, categoryController.getAllDishTypes);
router
  .route("/dishtype/:id")
  .get(addUser, categoryController.getDishType)
  .patch(protect, categoryController.updateDishType)
  .delete(protect, categoryController.deleteDishType);

router.get("/name/:name", addUser, categoryController.getCategoryByName);

export { router as categoryRouter };
