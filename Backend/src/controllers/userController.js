import Recipe from "../models/recipe.js";
import User from "../models/user.js";
import Reputation from "../models/reputation.js";
import Like from "../models/like.js";

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  console.log("get all users0");
  console.log(req.headers);
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "success",

      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        userID: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    //delte all comments, recipes, repulation and like  aassociated with user

    await Comment.destroy({ where: { userID: req.params.id } });
    await Recipe.destroy({ where: { userID: req.params.id } });
    await Reputation.destroy({ where: { userID: req.params.id } });
    await Like.destroy({ where: { userID: req.params.id } });

    await user.destroy();

    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
