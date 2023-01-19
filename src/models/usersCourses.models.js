const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const UsersCourses = db.define('users_courses',{
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
  },
  courseId: {
    type: DataTypes.INTEGER,
    field: "course_id",
  },
});

module.exports = UsersCourses;