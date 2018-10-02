const Product = require('mongoose').model('product');
const util = require('../../util/util');
const mongooseTransaction = require('mongoose-transactions');
const transaction = new mongooseTransaction();

var mongoose = require('mongoose');

exports.createProduct = (req, res, next) => {
    let product = req.body;    
    product.domain=req.headers.domain;
    Product.create(product).then((result) => {
        res.status(200).send({ msg: "Product created successfully", result });
    }).catch((error) => {
        res.status(400).send({ msg: "Product creation failed", error });
    })
}

exports.getAllProduct = (req, res, next) => {
    Product.find({domain:req.headers.domain})
        .sort({ name: -1 })
        .then((result) => {
            res.status(200).send(result);
        }).catch((error) => {
            console.log("Product retrival failed", err)
            res.status(400).send({ msg: "Product retrival failed", error });
        })
}

exports.getProductById = (req, res, next, id) => {
    console.log("Product id", req.params.id);
    Product.find({ $and: [{ domain: req.headers.domain },
    { _id: new mongoose.Types.ObjectId(req.params.id)}]})
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            console.log("Product retrival failed", error)
            res.status(400).send({ msg: "Product retrival failed", error });
        })
}

exports.updateProduct = (req, res, next) => {
    Product.findOne({ $and: [{domain:req.headers.domain},
    { name: req.body.name }, { _id: { $ne: req.params.id } }] },
        (err, result) => {

            if (err) {
                res.status(400).send({ msg: "Product updation failed", err })
                return;
            }

            if (result) {
                let error = new Error();
                error.name = "DUP_PRODUCT"
                res.status(400).send({ msg: "Product updation failed", error })
                return;
            }

            Product.findOneAndUpdate({ $and: [{ domain: req.headers.domain },
            { "_id": new mongoose.Types.ObjectId(req.params.id) }]}, req.body)
                .then((result) => {
                    res.status(200).send({ result, msg: "Product updated successfully" });
                }).catch((error) => {
                    res.status(400).send({ msg: "Product updation failed", error })
                })
        })
}