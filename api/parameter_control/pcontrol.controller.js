const PControl = require('mongoose').model('parameter');
const util = require('../../util/util');
const mongooseTransaction = require('mongoose-transactions');
const transaction = new mongooseTransaction();

var mongoose = require('mongoose');

exports.createParameter = (req, res, next) => {
    let parameter = req.body;    
    parameter.domain=req.headers.domain;
    PControl.create(parameter).then((result) => {
        res.status(200).send({ msg: "Parameter created successfully", result });
    }).catch((error) => {
        res.status(400).send({ msg: "Parameter creation failed", error });
    })
}

exports.getAllParameter = (req, res, next) => {
    PControl.find({domain:req.headers.domain})
        .sort({ name: -1 })
        .then((result) => {
            res.status(200).send(result);
        }).catch((error) => {
            console.log("Parameter retrival failed", err)
            res.status(400).send({ msg: "Parameter retrival failed", error });
        })
}

exports.getParameterById = (req, res, next, id) => {
    console.log("parameter id", req.params.id);
    PControl.find({ $and: [{ domain: req.headers.domain },
    { _id: new mongoose.Types.ObjectId(req.params.id)}]})
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            console.log("Parameter retrival failed", error)
            res.status(400).send({ msg: "Parameter retrival failed", error });
        })
}

exports.updateParameter = (req, res, next) => {
    PControl.findOne({ $and: [{domain:req.headers.domain},
    { name: req.body.name }, { _id: { $ne: req.params.id } }] },
        (err, result) => {

            if (err) {
                res.status(400).send({ msg: "Parameter updation failed", err })
                return;
            }

            if (result) {
                let error = new Error();
                error.name = "DUP_PARAM"
                res.status(400).send({ msg: "Parameter updation failed", error })
                return;
            }

            PControl.findOneAndUpdate({ $and: [{ domain: req.headers.domain },
            { "_id": new mongoose.Types.ObjectId(req.params.id) }]}, req.body)
                .then((result) => {
                    res.status(200).send({ result, msg: "Parameter updated successfully" });
                }).catch((error) => {
                    res.status(400).send({ msg: "Parameter updation failed", error })
                })
        })
}