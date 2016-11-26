const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const Promise = require('bluebird');
  Promise.promisifyAll(require("mongoose"));
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/grocery-list');


const GroceryModel = require('./models/models.js');
const GroceryRoutes = require('./routes/routes.js');
const GroceryController = require('./controllers/controllers.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use('/routes', GroceryRoutes);

app.get('*', (req, res, next) => {
  res.redirect('/routes');
});


const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Listening on Port ${port}`)
);
