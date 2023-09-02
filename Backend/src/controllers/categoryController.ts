import { Model, ModelCtor } from "sequelize";
import { Origin, Diet, MealCourse, DishType } from "../models/index";
import { Request, Response } from "express";

export const createOrigin = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newOrigin = await Origin.create({
      name,
      description,
    });
    res.status(201).json({
      status: "success",
      data: {
        origin: newOrigin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getOrigin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const origin = await Origin.findOne({ where: { id } });

    if (!origin) {
      return res.status(400).json({
        status: "fail",
        message: "Origin not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        origin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllOrigins = async (req: Request, res: Response) => {
  try {
    const origins = await Origin.findAll();

    res.status(200).json({
      status: "success",
      result: origins.length,
      data: {
        origins,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateOrigin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const origin = await Origin.findOne({ where: { id } });

    if (!origin) {
      return res.status(400).json({
        status: "fail",
        message: "Origin not found",
      });
    }

    await Origin.update(
      { name, description },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        origin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteOrigin = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const origin = await Origin.findOne({ where: { id } });

    if (!origin) {
      return res.status(400).json({
        status: "fail",
        message: "Origin not found",
      });
    }

    await Origin.destroy({
      where: {
        id,
      },
    });

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

//Diet

export const createDiet = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newDiet = await Diet.create({
      name,
      description,
    });
    res.status(201).json({
      status: "success",
      data: {
        diet: newDiet,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getDiet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const diet = await Diet.findOne({ where: { id } });

    if (!diet) {
      return res.status(400).json({
        status: "fail",
        message: "Diet not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        diet,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllDiets = async (req: Request, res: Response) => {
  try {
    const diets = await Diet.findAll();

    res.status(200).json({
      status: "success",
      result: diets.length,
      data: {
        diets,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateDiet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const diet = await Diet.findOne({ where: { id } });

    if (!diet) {
      return res.status(400).json({
        status: "fail",
        message: "Diet not found",
      });
    }

    await Diet.update(
      { name, description },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        diet,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteDiet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const diet = await Diet.findOne({ where: { id } });

    if (!diet) {
      return res.status(400).json({
        status: "fail",
        message: "Diet not found",
      });
    }

    await Diet.destroy({
      where: {
        id,
      },
    });

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

//MealCourse

export const createMealCourse = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newMealCourse = await MealCourse.create({
      name,
      description,
    });
    res.status(201).json({
      status: "success",
      data: {
        mealcourse: newMealCourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getMealCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const mealcourse = await MealCourse.findOne({ where: { id } });

    if (!mealcourse) {
      return res.status(400).json({
        status: "fail",
        message: "Meal Course not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        mealcourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllMealCourses = async (req: Request, res: Response) => {
  try {
    const mealcourses = await MealCourse.findAll();

    res.status(200).json({
      status: "success",
      result: mealcourses.length,
      data: {
        mealcourses,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateMealCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const mealcourse = await MealCourse.findOne({ where: { id } });

    if (!mealcourse) {
      return res.status(400).json({
        status: "fail",
        message: "Meal Course not found",
      });
    }

    await MealCourse.update(
      { name, description },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        mealcourse,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteMealCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const mealcourse = await MealCourse.findOne({ where: { id } });

    if (!mealcourse) {
      return res.status(400).json({
        status: "fail",
        message: "Meal Course not found",
      });
    }

    await MealCourse.destroy({
      where: {
        id,
      },
    });

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

//DishType

export const createDishType = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newDishType = await DishType.create({
      name,
      description,
    });
    res.status(201).json({
      status: "success",
      data: {
        dishtype: newDishType,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getDishType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const dishtype = await DishType.findOne({ where: { id } });

    if (!dishtype) {
      return res.status(400).json({
        status: "fail",
        message: "Dish Type not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        dishtype,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllDishTypes = async (req: Request, res: Response) => {
  try {
    const dishtypes = await DishType.findAll();

    res.status(200).json({
      status: "success",
      result: dishtypes.length,
      data: {
        dishtypes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateDishType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const dishtype = await DishType.findOne({ where: { id } });

    if (!dishtype) {
      return res.status(400).json({
        status: "fail",
        message: "Dish Type not found",
      });
    }

    await DishType.update(
      { name, description },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        dishtype,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteDishType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const dishtype = await DishType.findOne({ where: { id } });

    if (!dishtype) {
      return res.status(400).json({
        status: "fail",
        message: "Dish Type not found",
      });
    }

    await DishType.destroy({
      where: {
        id,
      },
    });

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
