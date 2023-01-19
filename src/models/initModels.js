const Users = require('./users.models');
const UsersCourses = require('./usersCourses.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');

const initModels = () => {

  // obligatoriamente hay que poner 
  // Users; y asi con cada uno para inicializarlos desde aqui y luego si crear las relaciones de cada uno

  UsersCourses.belongsTo(Users, {as: 'user', foreignKey: 'user_id'});
  Users.hasMany(UsersCourses, {as: 'courses', foreignKey: 'user_id'});

  UsersCourses.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(UsersCourses, {as: 'users', foreignKey: 'course_id'});

  Categories.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(Categories, {as: 'categories', foreignKey: 'course_id'});

  Videos.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
  Courses.hasMany(Videos, {as: 'videos', foreignKey: 'course_id'});

};

module.exports = initModels;