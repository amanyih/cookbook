import { Recipe, Origin, Diet, DishType, MealCourse } from "../models/index";
export const createRecipe = async (req: any, res: any) => {
  try {
    const {
      title,
      description,
      ingredients,
      cookingTime,
      serving,
      tags,
      image,
      steps,
      userId,
      origin,
      mealcourse,
      diet,
      dishtype,
    } = req.body;

    const recipe: any = await Recipe.create({
      title,
      description,
      ingredients,
      cookingTime,
      serving,
      tags,
      image,
      steps,
      userId,
    });
    const originObj = await Origin.findOrCreate({
      where: { name: origin },
    });

    const mealcourseObj = await MealCourse.findOrCreate({
      where: { name: mealcourse },
    });

    const dietObj = await Diet.findOrCreate({
      where: { name: diet },
    });

    const dishtypeObj = await DishType.findOrCreate({
      where: { name: dishtype },
    });

    await recipe.setOrigin(originObj[0]);
    await recipe.setDiet(dietObj[0]);
    await recipe.setDishtype(dishtypeObj[0]);
    await recipe.setMealcourse(mealcourseObj[0]);

    res.status(201).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findAll();
    res.status(200).json({
      status: "success",
      results: recipe.length,
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }
    await recipe.update(req.body);
    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }
    await recipe.destroy();
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getRecipeByUserId = async (req: any, res: any) => {
  res.send("getRecipeByUserId");
};

export const getRecipeByCategoryId = async (req: any, res: any) => {
  res.send("getRecipeByCategoryId");
};
