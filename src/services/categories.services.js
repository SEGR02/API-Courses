const Categories = require("../models/categories.models");

class CategoriesServices {
  static async create(field) {
    try {
      const result = Categories.create(field);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = Categories.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CategoriesServices;
