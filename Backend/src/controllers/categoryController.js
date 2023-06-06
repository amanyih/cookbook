import Category from "../models/category.js";
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({
      status: "success",
      results: categories.length,
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        categoryId: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (error) {}
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: {
        categoryId: req.params.id,
      },
    });
  } catch (err) {
    res.status(500).json({ status: "fail", error: error.message });
  }
};
