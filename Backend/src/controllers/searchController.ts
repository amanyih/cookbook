import {
  Recipe,
  Origin,
  Diet,
  DishType,
  MealCourse,
  Like,
  User,
  Rating,
  Comment,
  UserProfile,
} from "../models";
import sequelize from "sequelize";

export const searchRecipe = async (req: any, res: any) => {
  try {
    const { title, origin, mealcourse, diet, dishtype } = req.query;
    console.log(title, origin, mealcourse, diet, dishtype);
    //filter recipes by title (ignore case)

    const recipe = await Recipe.findAll({
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
      where: {
        //filter by title (ignore case)
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + title + "%"
        ),
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
