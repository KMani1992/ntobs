const Sales = require('mongoose').model('sales');
const util = require('../../util/util');
const mongooseTransaction = require('mongoose-transactions');
const transaction = new mongooseTransaction();

var mongoose = require('mongoose');

exports.createSales = (req, res, next) => {

    async function start() {
        try {
            let sales = req.body;
            const billNo = util.generateId();
            const domain = req.headers.domain;
            sales.map((data) => {
                data.domain = domain;
                data.billNo = billNo;
                transaction.insert("sales", data);
            });
            const finalRes = await transaction.run();            
            res.status(200).send({ billNo: billNo, msg: `Sales created successfully,[Bill Number:${billNo}` });
        } catch (error) {
            res.status(400).send({ error, msg: "Sales Creation failed" });
            console.log("Sales creation error =>", error);
            const rollBackObj = await transaction.rollback().catch(console.error);
            
        }finally{
            transaction.clean();
        }
    }
    start();
}

exports.getAllSales = (req, res, next) => {
    Sales.find({ domain: req.headers.domain })
        .sort({ name: -1 })
        .then((result) => {
            res.status(200).send(result);
        }).catch((error) => {
            console.log("Sales retrival failed", err)
            res.status(400).send({ msg: "Sales retrival failed", error });
        })
}


exports.getSalesByBillNo = (req, res, next, domainName) => {
    console.log("Sales id", req.params.billNo);
    Sales.find({
        $and: [{ domain: req.headers.domain },
        { billNo: req.params.billNo }]
    })
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            console.log("Sales retrival failed", error)
            res.status(400).send({ msg: "Sales retrival failed", error });
        })
}

exports.updateSales = (req, res, next) => {

    async function start() {
        try {
            let sales = req.body;
            const domain = req.headers.domain;
            
            sales.map((data) => {
                 transaction.update("sales", { _id: data._id, domain: domain }, data);                 
            });
            const finalRes = await transaction.run();            
            res.status(201).send({ msg: "Sales updated successfully" });
        } catch (error) {
            res.status(400).send({ error, msg: "Sales updation failed" });
            console.log("Sales updation error =>", error);
            const rollBackObj = await transaction.rollback().catch(console.error);            
        }finally{
            transaction.clean();
        }
    }
    start();
}