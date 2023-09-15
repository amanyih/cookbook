import { Comment, User, Recipe, Like, UserProfile } from "../models/index";

export const createComment = async (req: any, res: any) => {
  try {
    const { recipeId, content } = req.body;

    const reqUser = req.user;

    //check if user exists
    const user = await User.findByPk(reqUser.id);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    //check if recipe exists
    const recipe = await Recipe.findByPk(recipeId);
    if (!recipe) {
      return res.status(404).json({
        status: "fail",
        message: "Recipe not found",
      });
    }

    const comment: any = await Comment.create({
      content,
    });

    await comment.setUser(user);
    await comment.setRecipe(recipe);

    const newComment = await Comment.findByPk(comment.id, {
      include: [
        {
          model: User,
          as: "user",
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
          model: Like,
          as: "likes",
          attributes: ["userId"],
        },
      ],
    });

    res.status(201).json({
      status: "success",
      data: {
        comment: newComment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getComment = async (req: any, res: any) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({
        status: "fail",
        message: "Comment not found",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const getAllComment = async (req: any, res: any) => {
  try {
    const comment = await Comment.findAll();
    res.status(200).json({
      status: "success",
      results: comment.length,
      data: {
        comment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const updateComment = async (req: any, res: any) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({
        status: "fail",
        message: "Comment not found",
      });
    }
    const newcomment = await comment.update(req.body);
    res.status(200).json({
      status: "success",
      data: {
        comment: newcomment,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
export const deleteComment = async (req: any, res: any) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
      return res.status(404).json({
        status: "fail",
        message: "Comment not found",
      });
    }
    await comment.destroy();
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
export const likeComment = async (req: any, res: any) => {
  try {
    const { id: commentId } = req.params;
    const { userId } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({
        status: "fail",
        message: "Comment not found",
      });
    }

    const like = await Like.findOne({
      where: {
        userId,
        commentId,
      },
    });

    if (like) {
      await like.destroy();
      return res.status(200).json({
        status: "success",
        message: "Like removed",
      });
    }

    await Like.create({
      userId,
      commentId,
    });

    res.status(201).json({
      status: "success",
      message: "Like added",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
//TODO: getCommentByRecipeId, getCommentByUserId
export const getCommentByRecipeId = async (req: any, res: any) => {
  res.send("getCommentByRecipeId");
};

export const getCommentByUserId = async (req: any, res: any) => {
  res.send("getCommentByUserId");
};
