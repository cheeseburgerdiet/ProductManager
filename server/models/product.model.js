const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    type: { type: String},
    price: {type: String},
    description: {type: String}
}, { timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);