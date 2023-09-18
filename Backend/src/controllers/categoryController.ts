import { Model, ModelCtor } from "sequelize";
import {
  Origin,
  Diet,
  MealCourse,
  DishType,
  Recipe,
  Like,
  Rating,
  User,
  Comment,
  UserProfile,
} from "../models/index";
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
    const origin: any = await Origin.findOne({
      where: { id },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });

    if (!origin) {
      return res.status(400).json({
        status: "fail",
        message: "Origin not found",
      });
    }
    origin!.recipes.forEach((recipe: any) => {
      recipe.setDataValue("likes", recipe.likes.length);
      recipe.setDataValue("comments", recipe.comments.length);
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;
    });

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
    const origins = await Origin.findAll({
      include: [
        {
          model: Recipe,
          as: "recipes",
        },
      ],
    });

    origins.forEach((origin: any) => {
      origin.setDataValue("recipes", origin.recipes.length);
    });

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
    const diet: any = await Diet.findOne({
      where: { id },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });

    if (!diet) {
      return res.status(400).json({
        status: "fail",
        message: "Diet not found",
      });
    }

    diet!.recipes.forEach((recipe: any) => {
      recipe.setDataValue("likes", recipe.likes.length);
      recipe.setDataValue("comments", recipe.comments.length);
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;
    });

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
    const diets = await Diet.findAll({
      include: [
        {
          model: Recipe,
          as: "recipes",
        },
      ],
    });

    diets.forEach((diet: any) => {
      diet.setDataValue("recipes", diet.recipes.length);
    });

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
    const mealcourse: any = await MealCourse.findOne({
      where: { id },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });

    if (!mealcourse) {
      return res.status(400).json({
        status: "fail",
        message: "Meal Course not found",
      });
    }

    mealcourse!.recipes.forEach((recipe: any) => {
      recipe.setDataValue("likes", recipe.likes.length);
      recipe.setDataValue("comments", recipe.comments.length);
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;
    });

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
    const mealcourses = await MealCourse.findAll({
      include: [
        {
          model: Recipe,
          as: "recipes",
        },
      ],
    });

    mealcourses.forEach((mealcourse: any) => {
      mealcourse.setDataValue("recipes", mealcourse.recipes.length);
    });

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
    const dishtype: any = await DishType.findOne({
      where: { id },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });

    if (!dishtype) {
      return res.status(400).json({
        status: "fail",
        message: "Dish Type not found",
      });
    }

    dishtype!.recipes.forEach((recipe: any) => {
      recipe.setDataValue("likes", recipe.likes.length);
      recipe.setDataValue("comments", recipe.comments.length);
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;
    });

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
    const dishtypes = await DishType.findAll({
      include: [
        {
          model: Recipe,
          as: "recipes",
        },
      ],
    });

    dishtypes.forEach((dishtype: any) => {
      dishtype.setDataValue("recipes", dishtype.recipes.length);
    });

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

export const getCategoryByName = async (req: any, res: Response) => {
  const { name } = req.params;

  try {
    let category: any;
    const origin = await Origin.findOne({
      where: { name },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt", "username"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });
    if (origin) {
      category = origin;
    }
    const diet = await Diet.findOne({
      where: { name },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt", "username"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });
    if (diet) {
      category = diet;
    }
    const mealcourse = await MealCourse.findOne({
      where: { name },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt", "username"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });
    if (mealcourse) {
      category = mealcourse;
    }
    const dishtype = await DishType.findOne({
      where: { name },
      include: [
        {
          model: Recipe,
          as: "recipes",

          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "createdAt", "username"],
              include: [
                {
                  model: UserProfile,
                  as: "profile",
                  attributes: ["name", "profilePicture"],
                },
              ],
            },
            {
              model: Rating,
              attributes: ["rating"],
              as: "ratings",
            },
            {
              model: Comment,
              as: "comments",
            },
            {
              model: Like,
              as: "likes",
            },
          ],
          attributes: {
            exclude: [
              "updatedAt",
              "userId",
              "originId",
              "mealcourseId",
              "dietId",
              "dishTypeId",
              "steps",
              "ingredients",
              "tags",
              "authorId",
              "nutrition",
            ],
          },
        },
      ],
    });
    if (dishtype) {
      category = dishtype;
    }

    category!.recipes.forEach((recipe: any) => {
      recipe.setDataValue("likes", recipe.likes.length);
      recipe.setDataValue("comments", recipe.comments.length);
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;
      recipe.dataValues.isLiked = recipe.likes.some((like: any) =>
        req.user ? like.userId === req.user.id : false
      );
    });
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getPopularCategories = async (req: any, res: Response) => {
  try {
    const x = [
      {
        model: Recipe,
        as: "recipes",
      },
    ];

    const origins = await Origin.findAll({
      include: x,
    });
    const diets = await Diet.findAll({
      include: x,
    });
    const mealcourses = await MealCourse.findAll({
      include: x,
    });
    const dishtypes = await DishType.findAll({
      include: x,
    });

    const categories = [...origins, ...diets, ...mealcourses, ...dishtypes];

    categories.forEach((category: any) => {
      category.setDataValue("recipes", category.recipes.length);
    });

    const sortedCategories = categories.sort(
      (a: any, b: any) => b.recipes - a.recipes
    );

    const popularCategories = sortedCategories.slice(0, 5);

    return res.status(200).json({
      status: "success",
      result: popularCategories.length,
      data: {
        categories: popularCategories,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
