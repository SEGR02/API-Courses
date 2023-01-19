const db = require("../utils/database");
const {DataTypes} = require('sequelize');

const Categories = db.define('categories',{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: "course_id",
  },
});

module.exports = Categories;