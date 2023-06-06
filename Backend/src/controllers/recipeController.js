import Recipe from "../models/recipe";
import Comment from "../models/comment";
import Like from "../models/like";

exports.createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll();

    res.status(200).json({
      status: "success",

      results: recipes.length,
      data: {
        recipes,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.update(req.body, {
      where: {
        recipeID: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        recipe,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);

    await Comment.destroy({ where: { recipeID: req.params.id } });
    await Like.destroy({ where: { recipeID: req.params.id } });
    await recipe.destroy();

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getRecipeByUser = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: {
        userId: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      results: recipes.length,
      data: {
        recipes,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getRecipeByCategory = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({
      where: { categoryId: req.params.category },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
