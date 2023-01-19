const Courses = require("../models/courses.models");
const Categories = require("../models/categories.models");
const Videos = require("../models/videos.models");

class CoursesServices {
  static async getAll() {
    try {
      const result = Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async withCategoriesAndVideos() {
    try {
      const result = await Courses.findAll({
        attributes: ["title"],
        include: [
          {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
          {
            model: Videos,
            as: "videos",
          },
        ],
        // no se porque no me muestra este include profe
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(field) {
    try {
      const result = Courses.create(field);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CoursesServices;
