const CoursesServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
  try {
    const result = await CoursesServices.getAll();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

const withCategoriesAndVideos = async (req,res) => {
  try {
    const result = await CoursesServices.withCategoriesAndVideos();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
};

const create =  async (req,res) => {
  try {
    const field = req.body;
    const result = await CoursesServices.create(field);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const update = async (req, res) => {
  try {
    const {id} = req.params;
    const field = {};
    field.description = req.body.description;
    const result = await CoursesServices.update(id, field);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllCourses,
  withCategoriesAndVideos,
  create,
  update,
};