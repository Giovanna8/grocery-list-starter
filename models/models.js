const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
    'product' : String,
    'quantity' : Number
});



module.exports = mongoose.model('groceryItems', grocerySchema);
