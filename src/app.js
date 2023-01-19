const express = require('express');
const initModels = require('./models/initModels');
const app = express();
const PORT = 8000;
const usersRoutes = require('./routes/users.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const CategoriesRoutes = require('./routes/categories.routes');
const db = require('./utils/database');

app.use(express.json());

db.authenticate()
  .then(()=>console.log('Auth success'))
  .catch((error)=>console.log(error.message));

initModels();

db.sync({alter: true})
  .then(()=>console.log('DB sync'))
  .catch((error)=>console.log(error.message));

app.use('/api/v1', usersRoutes, coursesRoutes, videosRoutes, CategoriesRoutes);

app.listen(PORT, ()=>{
  console.log(`Escuchando en el puerto ${PORT}`);
});