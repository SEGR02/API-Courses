const UserServices = require('../services/user.services');

const getAllUsers = async (req,res) => {
  try {
    const result = await UserServices.allUsers();
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const getById = async (req,res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.byId(id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const getWithCourses = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await UserServices.byIdWithCourses(id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserServices.create(user);
    res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const field = {}
    field.firstName = req.body.firstName;
    field.password = req.body.password;
    const {id} = req.params;
    const result = await UserServices.update(field, id);
    res.json(result)
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const addCourse = async (req, res) => {
  try {
    const field = {};
    field.userId = Number(req.params.id);
    field.courseId = req.body.courseId;
    if(field.courseId == null) {
      res.send("RESPONDER CON {'courseId': NUMBER (1-4) }");
    } else {
      const result = await UserServices.addCourse(field);
      res.json(result);
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
}

module.exports = {
  getAllUsers,
  getById,
  getWithCourses,
  createUser,
  updateUser,
  addCourse,
};