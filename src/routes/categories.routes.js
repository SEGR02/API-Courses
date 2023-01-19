const Router = require("express");
const router = Router();
const {
  create,
  deleteCategory,
} = require("../controllers/categories.controllers");

router.post("/categories", create);

router.delete("/categories/:id", deleteCategory);

module.exports = router;
