import { Op } from "sequelize";
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
  UserProfile,
} from "../models/index";
import { RecipeDetail, RecipeList } from "../constants/recipe";
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
      origin,
      mealcourse,
      diet,
      dishtype,
      nutrition,
    } = req.body;

    const reqUser = req.user;
    const user: any = await User.findByPk(reqUser.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const recipe: any = await Recipe.create({
      title,
      description,
      ingredients,
      cookingTime,
      serving,
      tags,
      image,
      steps,
      nutrition,
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
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getRecipe = async (req: any, res: any) => {
  try {
    const recipe: any = await Recipe.findByPk(req.params.id, {
      include: RecipeDetail,
    });
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const reqUser = req.user;

    if (reqUser) {
      recipe.dataValues.isLiked = recipe.likes.some(
        (like: any) => like.userId === reqUser.id
      );
      recipe.dataValues.comments.map((comment: any) => {
        comment.dataValues.isLiked = comment.likes.some(
          (like: any) => like.userId === reqUser.id
        );
      });
    } else {
      recipe.dataValues.isLiked = false;
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
    const recipe = await Recipe.findAll({
      include: RecipeList,
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
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateRecipe = async (req: any, res: any) => {
  try {
    const user = req.user;

    const recipe: any = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
        },
      ],
    });
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    if (recipe.author.id !== user.id) {
      return res.status(401).json({
        status: "fail",
        message: "You are not authorized to update this recipe",
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
    const user = req.user;
    const recipe: any = await Recipe.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: "author",
        },
      ],
    });
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    if (recipe.author.id !== user.id) {
      return res.status(401).json({
        status: "fail",
        message: "You are not authorized to update this recipe",
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
    const reqUser = req.user;

    const recipe: any = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const user = await User.findByPk(reqUser.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const like = await Like.findOne({
      where: {
        userId: reqUser.id,
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
      userId: reqUser.id,
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
    const { rating } = req.body;
    const reqUser = req.user;

    const recipe: any = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const user = await User.findByPk(reqUser.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    const rate = await Rating.findOne({
      where: {
        userId: reqUser.id,
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
      userId: reqUser.id,
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

export const getFeaturedRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findAll({
      where: {
        id: [1, 2, 3, 4, 5],
      },
      include: RecipeList,
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
      order: [["createdAt", "DESC"]],
      limit: 5,
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
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getTopRecipe = async (req: any, res: any) => {
  try {
    let recipe = await Recipe.findAll({
      include: RecipeList,
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
      order: [["createdAt", "DESC"]],
      limit: 10,
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

    recipe = recipe.sort((a: any, b: any) => b.rating - a.rating);

    recipe = recipe.slice(0, 10);

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
export const getLatestRecipe = async (req: any, res: any) => {
  try {
    const recipe = await Recipe.findAll({
      include: RecipeList,
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
      order: [["createdAt", "DESC"]],
      limit: 10,
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
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
