const {Router} = require('express');
const router = Router();
const {getAllUsers, getById, getWithCourses, createUser, updateUser, addCourse} = require('../controllers/users.controllers.js');

router.get('/users', getAllUsers);
router.get('/users/:id', getById);
router.get('/users/:id/courses', getWithCourses);

router.post('/users', createUser);
router.post('/users/:id', addCourse);

router.put('/users/:id', updateUser);

module.exports = router;