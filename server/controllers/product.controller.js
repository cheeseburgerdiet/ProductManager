const Product = require("../models/product.model");



module.exports.createProduct = (request, response) => {
    const { type, price, description} = request.body;
    Product.create({
        type,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findById({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}