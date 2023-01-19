const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');
const Courses = require('../models/courses.models');

class UserServices {

  static async allUsers(){
    try {
      const result = Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async byId(id){
    try {
      const result = Users.findByPk(id,{
        attributes: {
          exclude: ['password','createdAt','updatedAt'],
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async byIdWithCourses(id){
    try {
      const result = Users.findByPk(id,{
        attributes: {
          exclude: ['password','createdAt','updatedAt'],
        },
        include: {
          model: UsersCourses,
          as: "courses",
          attributes: ['id'],
          include: {
            model: Courses,
            as: 'course',
            attributes: ['title'],
          }
        }
      })
      return result
    } catch (error) {
      throw error
    }
  };

  static async create(user){
    try {
      const result = await Users.create(user)
      return result;
    } catch (error) {
      throw error
    }
  };

  static async update(field, id){
    try {
      const result = await Users.update(field, {
        where: {id},
      })
      return result
    } catch (error) {
      throw error
    }
  };

  static async addCourse(field){
    try {
      const result = UsersCourses.create(field);
      return result
    } catch (error) {
      throw error;
    }
  }

}

module.exports = UserServices;