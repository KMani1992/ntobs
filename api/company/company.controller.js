const Company = require('mongoose').model('company');
const Operator = require('mongoose').model('operator');
const util = require('../../util/util');
const mongooseTransaction = require('mongoose-transactions');
const transaction = new mongooseTransaction();

var mongoose = require('mongoose');

exports.createCompany = (req, res, next) => {
    async function start() {
        try {
            let operator = req.body.operator;
            let company = req.body.company;
            operator.domain = company.domain;
            operator.password = util.hashPassword(operator.password);
            const operatorId = transaction.insert("operator", operator);            
            company.operator = operatorId;            
            const companyId = transaction.insert("company", company);
            const finalRes = await transaction.run();            
            res.status(201).send({ companyId: companyId, msg: "Company created successfully" });
        } catch (error) {
            res.status(400).send({ error, msg: "Company Creation failed" });
            console.log("company creation error =>", error);
            const rollBackObj = await transaction.rollback().catch(console.error);            
        }finally{
            transaction.clean();
        }
    }
    start();
}

exports.getAllCompany = (req, res, next) => {
    Company.find({ domain: req.headers.domain })
        .sort({ name: -1 })
        .then((result) => {
            res.status(200).send(result);
        }).catch((error) => {
            console.log("company retrival failed", err)
            res.status(400).send({ msg: "company retrival failed", error });
        })
}


exports.getCompanyByDomainName = (req, res, next) => {
    console.log("company id", req.headers.domain);
    Company.find({ domain: req.headers.domain })
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            console.log("company retrival failed", error)
            res.status(400).send({ msg: "company retrival failed", error });
        })
}

exports.updateCompany = (req, res, next) => {

    if (req.body.domain) {
        res.status(400).send({ 
            error: "Company updation failed!, Domain name can't able to update",
            description:"remove the domain name in the body and try again" })
        return;
    }

    Company.findOneAndUpdate({
        $and: [{ domain: req.headers.domain },
        { "_id": new mongoose.Types.ObjectId(req.params.id) }]
    }, req.body)
        .then((result) => {
            res.status(200).send({ result, msg: "Company updated successfully" });
        }).catch((error) => {
            res.status(400).send({ msg: "Company updation failed", error })
        })


}