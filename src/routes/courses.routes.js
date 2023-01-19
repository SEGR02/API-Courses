const Router = require('express');
const router = Router();
const { getAllCourses, withCategoriesAndVideos, create, update } = require('../controllers/courses.controllers');

router.get('/courses', getAllCourses);
router.get('/courses/categoriesAndVideos', withCategoriesAndVideos);

router.post('/courses', create);

router.put('/courses/:id', update);

module.exports = router;