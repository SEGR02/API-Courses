const VideoServices = require('../services/videos.services');

const create = async (req, res) => {
  try {
    const field = req.body;
    const result = await VideoServices.create(field);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const forDelete = async (req, res) => {
  try {
    const {id} = req.params;
    const result = VideoServices.delete(id);
    res.json(result);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
}

module.exports = {
  create,
  forDelete,
}