import Comment from "../models/comment";

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();

    res.status(200).json({
      status: "success",

      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.update(req.body, {
      where: {
        commentID: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        comment,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        commentID: req.params.id,
      },
    });

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getCommentsByRecipe = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        recipeID: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getCommentsByUser = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: {
        userID: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      results: comments.length,
      data: {
        comments,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
