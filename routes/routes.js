const express = require('express');
const router = express.Router();

const GroceryModel = require('../models/models.js');
const GroceryController = require('../controllers/controllers.js');


router.get('/', GroceryController.list);
router.get('/:id', GroceryController.show);

router.post('/', GroceryController.create);

router.put('/:id', GroceryController.update);

router.delete('/:id', GroceryController.remove);






module.exports = router;
