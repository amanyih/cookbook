import { Comment, User } from "../models/index";

export const createComment = async (req: any, res: any) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(201).json({
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
//TODO: getCommentByRecipeId, getCommentByUserId
export const getCommentByRecipeId = async (req: any, res: any) => {
  res.send("getCommentByRecipeId");
};

export const getCommentByUserId = async (req: any, res: any) => {
  res.send("getCommentByUserId");
};
