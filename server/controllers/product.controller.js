const Product = require("../models/product.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

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