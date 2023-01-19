const db = require('../utils/database');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');
const Courses = require('../models/courses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');

const users = [
  {
    "firstName": "Sebastian",
    "lastName": "Gomez",
    "password": "1234",
    "email": "sebas@gmail.com"
  },
  {
    "firstName": "Genesis",
    "lastName": "Caballero",
    "password": "1234",
    "email": "gene@gmail.com"
  }
];
const usersCourses = [
  {
    "userId": 1,
    "courseId": 2,
  },
  {
    "userId": 1,
    "courseId": 3,
  },
  {
    "userId": 2,
    "courseId": 1,
  },
  {
    "userId": 2,
    "courseId": 4,
  },
];
const courses = [
  {
    "title": "Photoshop",
    "description": "Photoshop desde 0",
    "instructor": "Jose jose",
  },
  {
    "title": "Phyton",
    "description": "Phyton intermedio",
    "instructor": "Gabriela Zambrano",
  },
  {
    "title": "AWS",
    "description": "AWS avanzado",
    "instructor": "Gabriela Zambrano",
  },
  {
    "title": "Illustrator",
    "description": "Ilustrator desde 0 hasta avanzado",
    "instructor": "Jose jose",
  },
];
const categories = [
  {
    "name": "Design",
    "courseId": 1,
  },
  {
    "name": "UX",
    "courseId": 1,
  },
  {
    "name": "Programming",
    "courseId": 2,
  },
  { 
    "name": "Data science",
    "courseId": 2,
  },
  { 
    "name": "Cloud",
    "courseId": 3, 
  },
  { 
    "name": "SaaS",
    "courseId": 3, 
  },
  {
    "name": "Design 3D",
    "courseId": 4,
  },
  {
    "name": "Logotypes",
    "courseId": 4,
  },
];
const videos = [
  {
    "title": "Photoshop 1",
    "url": "photoshop1.com",
    "courseId": 1,
  },
  {
    "title": "Photoshop 2",
    "url": "photoshop2.com",
    "courseId": 1,
  },
  {
    "title": "Photoshop 3",
    "url": "photoshop3.com",
    "courseId": 1,
  },
  {
    "title": "Phyton 1",
    "url": "phyton1.com",
    "courseId": 2,
  },
  {
    "title": "Phyton 2",
    "url": "phyton2.com",
    "courseId": 2,
  },
  {
    "title": "Phyton 3",
    "url": "phyton3.com",
    "courseId": 2,
  },
  {
    "title": "AWS 1",
    "url": "aws1.com",
    "courseId": 3,
  },
  {
    "title": "AWS 2",
    "url": "aws2.com",
    "courseId": 3,
  },
  {
    "title": "AWS 3",
    "url": "aws3.com",
    "courseId": 3,
  },
  {
    "title": "Illustrator 1",
    "url": "illustrator1.com",
    "courseId": 4,
  },
  {
    "title": "Illustrator 2",
    "url": "illustrator2.com",
    "courseId": 4,
  },
  {
    "title": "Illustrator 3",
    "url": "illustrator3.com",
    "courseId": 4,
  },
];

db.sync({force: true,}) // la sincronizacion de la db es una promesa necesita .then
  .then(()=>{
    console.log('exito');

    users.forEach((user)=> Users.create(user));

    setTimeout(()=>{
      usersCourses.forEach((coursePerUser)=> UsersCourses.create(coursePerUser));
    },100);
    setTimeout(()=>{
      courses.forEach((course)=> Courses.create(course));
    },200);
    setTimeout(()=>{
      categories.forEach((category)=> Categories.create(category));
    },300);
    setTimeout(()=>{
      videos.forEach((video)=> Videos.create(video));
    },450);
  })
  .catch((error)=>console.log(error));