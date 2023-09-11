import {
  Recipe,
  Origin,
  Diet,
  DishType,
  MealCourse,
  User,
  Like,
  Comment,
  Rating,
} from "../models/index";
import sequelize from "sequelize";
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
      nutrition,
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
      nutrition,
    });

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

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

    await recipe.setAuthor(user);
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
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
          attributes: ["profilePicture", "email", "createdAt"],
        },
        Origin,
        Diet,
        DishType,
        MealCourse,

        {
          model: Rating,
          attributes: ["rating", "userId", "recipeId"],
          as: "ratings",
        },
        {
          model: Comment,
          as: "comments",
          include: [
            {
              model: User,
              as: "user",
              attributes: ["profilePicture", "email", "createdAt"],
            },
            {
              model: Like,
              as: "likes",
              attributes: ["userId"],
            },
          ],
        },
        {
          model: Like,
          as: "likes",
          attributes: ["userId"],
        },
      ],
    });
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
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findAll({
      include: [
        {
          model: User,
          as: "author",
          attributes: ["id", "profilePicture", "email", "createdAt"],
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
    });

    recipe.map((recipe: any) => {
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length;
      delete recipe.dataValues.ratings;

      recipe.dataValues.comments = recipe.comments.length;

      recipe.dataValues.likes = recipe.likes.length;
      recipe.dataValues.isLiked = recipe.likes.some((like: any) =>
        req.user ? like.userId === req.user.id : false
      );
    });

    res.status(200).json({
      status: "success",
      results: recipe.length,
      data: {
        recipe,
      },
    });
  } catch (err) {
    console.log(err);
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

export const likeRecipe = async (req: any, res: any) => {
  try {
    const { id: recipeId } = req.params;
    const { userId } = req.body;

    const recipe: any = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const like = await Like.findOne({
      where: {
        userId,
        recipeId,
      },
    });

    if (like) {
      await like.destroy();
      return res.status(204).json({
        status: "success",
        data: null,
      });
    }

    await Like.create({
      userId,
      recipeId,
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

export const rateRecipe = async (req: any, res: any) => {
  try {
    const { id: recipeId } = req.params;
    const { userId, rating } = req.body;

    const recipe: any = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const rate = await Rating.findOne({
      where: {
        userId,
        recipeId,
      },
    });

    if (rate) {
      await rate.update({ rating });
      return res.status(204).json({
        status: "success",
        data: null,
      });
    }

    await Rating.create({
      userId,
      recipeId,
      rating,
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

export const getRecipeByUserId = async (req: any, res: any) => {
  res.send("getRecipeByUserId");
};

export const getRecipeByCategoryId = async (req: any, res: any) => {
  res.send("getRecipeByCategoryId");
};
