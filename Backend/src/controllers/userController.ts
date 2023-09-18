import {
  Recipe,
  User,
  Like,
  Comment,
  UserProfile,
  Rating,
} from "../models/index";

export const createUser = async (req: any, res: any) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllUsers = async (req: any, res: any) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateUser = async (req: any, res: any) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    const updatedUser = await user.update(req.body);
    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteUser = async (req: any, res: any) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    await user.destroy();
    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getUserRecipes = async (req: any, res: any) => {
  try {
    const { username } = req.params;

    const recipe = await Recipe.findAll({
      where: { "$author.username$": username },
      include: [
        {
          model: User,
          as: "author",
          attributes: ["id", "email", "username", "createdAt", "username"],
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
    });

    recipe.map((recipe: any) => {
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length || 0;
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

export const getUserLikedRecipes = async (req: any, res: any) => {
  try {
    const { username } = req.params;
    const likedRecipes = await Like.findAll({
      where: { "$user.username$": username },
      include: [
        {
          model: User,
          as: "user",
          attributes: ["id", "email", "username", "createdAt"],
        },
        {
          model: Recipe,
          as: "recipe",
          include: [
            {
              model: User,
              as: "author",
              attributes: ["id", "email", "username", "createdAt", "username"],
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

    const recipe = likedRecipes
      .map((like: any) => like.recipe)
      .filter((recipe: any) => recipe !== null);

    recipe.map((recipe: any) => {
      const rating = recipe.ratings.reduce(
        (acc: any, cur: any) => acc + cur.rating,
        0
      );
      recipe.dataValues.rating = rating / recipe.ratings.length || 0;
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

export const getUserComments = async (req: any, res: any) => {
  try {
    const { username } = req.params;
    const comments = await Comment.findAll({
      where: { "$user.username$": username },
      include: [
        {
          model: User,
          as: "user",
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
          model: Like,
          as: "likes",
          attributes: ["userId"],
        },
      ],
    });

    comments.map((comment: any) => {
      comment.dataValues.isLiked = comment.likes.some((like: any) =>
        req.user ? like.userId === req.user.id : false
      );
    });

    res.status(200).json({
      status: "success",
      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
