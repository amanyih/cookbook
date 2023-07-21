import { Ingredient } from "../models";

export const createIngredient = async (req: any, res: any) => {
  try {
    const ingredient = await Ingredient.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        ingredient,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
    });
  }
};
export const getAllIngredients = async (req: any, res: any) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.status(200).json({
      status: "success",
      results: ingredients.length,
      data: {
        ingredients,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
    });
  }
};
export const getIngredientById = async (req: any, res: any) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }
    res.status(200).json({
      status: "success",
      data: {
        ingredient,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
    });
  }
};
export const updateIngredient = async (req: any, res: any) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }
    const updateIngredient = await ingredient.update(req.body);
    res.status(200).json({
      status: "success",
      data: {
        ingredient: updateIngredient,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
    });
  }
};
export const deleteIngredient = async (req: any, res: any) => {
  try {
    const ingredient = await Ingredient.findByPk(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }
    await ingredient.destroy();
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
    });
  }
};

//TODO: create a new controller to get all ingredients by recipe id
export const getAllIngredientsByRecipeId = async (req: any, res: any) => {};
