const Router = require('express');
const router = Router();
const {create, forDelete} = require('../controllers/videos.controllers');

router.post('/videos', create);

router.delete('/videos/:id', forDelete);

module.exports = router