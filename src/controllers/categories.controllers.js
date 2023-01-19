const CategoriesServices = require("../services/categories.services");

const create = async (req, res) => {
  try {
    const field = req.body;
    const result = CategoriesServices.create(field);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = CategoriesServices.delete(id);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  create,
  deleteCategory,
};
