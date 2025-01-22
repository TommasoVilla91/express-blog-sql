const express = require("express");
const router = express.Router();
const recipesController = require("../controllers/foodController");
const checkExists = require("../middlewares/checkExists");


// index
router.get('/', recipesController.index);

// show
router.get('/:id', checkExists, recipesController.show);

// create
// router.post('/', recipesController.create);

// Update
// router.put('/:id', checkExists, recipesController.update);

// modify
// router.patch('/:id', checkExists, recipesController.modify);

// destroy
router.delete('/:id', checkExists, recipesController.destroy);

module.exports = router;