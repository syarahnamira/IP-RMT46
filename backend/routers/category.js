const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/category')

router.post("/", CategoryController.createCategory);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports=router