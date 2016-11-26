const GroceryModel = require('../models/models.js');

module.exports = {
  list: function(req, res) {
    GroceryModel.find((err, groceryItems) => {
      res.render('index', {
        groceryItems: groceryItems
      });
    });
  },
  show: function(req, res) {
    GroceryModel.findById(req.params.id).exec()
      .then(groceryItems => {
        groceryItems.text = req.body.text
          return groceryItems.save();
      })
    .then(groceryItems => res.json(groceryItems))
    .catch(err => next(err));
  },
  create: function(req, res) {
    var groceryItems = GroceryModel({
      product: req.body.product,
      quantity: req.body.quantity
    });
    groceryItems.save((err, groceryItems) => {
      res.redirect('/');
    });
  },
  update: function(req, res) {
    GroceryModel.findById(req.params.id).exec()
      .then(groceryItems => {
        groceryItems.text = req.body.text;
        return groceryItems.save();
      });
    then(groceryItems => res.json(groceryItems))
    .catch(err => next(err));
  },
  remove: function(req, res) {
    GroceryModel.findByIdAndRemove(req.params.id).exec()
    .then(groceryItems => res.json(groceryItems))
    .catch(err => next(err));
  },
};
