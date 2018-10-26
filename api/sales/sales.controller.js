const Sales = require("mongoose").model("sales");
const util = require("../../util/util");
const mongooseTransaction = require("mongoose-transactions");
const transaction = new mongooseTransaction();
const moment = require("moment");

var mongoose = require("mongoose");

exports.createSales = (req, res, next) => {
  async function start() {
    try {
      let sales = req.body;
      const billNo = util.generateId();
      const domain = req.headers.domain;
      sales.map(data => {
        console.log("sale data", JSON.stringify(data, 0, 2));
        data.domain = domain;
        data.billNo = billNo;
        transaction.insert("sales", data);
      });
      const finalRes = await transaction.run();
      res.status(200).send({
        billNo: billNo,
        msg: `Sales created successfully,[Bill Number:${billNo}`
      });
    } catch (error) {
      res.status(400).send({ error, msg: "Sales Creation failed" });
      console.log("Sales creation error =>", error);
      const rollBackObj = await transaction.rollback().catch(console.error);
    } finally {
      transaction.clean();
    }
  }
  start();
};

exports.getAllSales = (req, res, next) => {
  Sales.find({ domain: req.headers.domain })
    .sort({ _id: -1 })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      console.log("Sales retrival failed", err);
      res.status(400).send({ msg: "Sales retrival failed", error });
    });
};

exports.getSalesRpt = (req, res, next) => {
  let fromDt = req.query.fromDt;
  let toDt = req.query.toDt;
  let metal = req.query.metal;
  let category = req.query.category;
  let product = req.query.product;
  let billNo = req.query.billNo;

  console.log(
    "Sales rpt query data",
    fromDt,
    toDt,
    metal,
    category,
    product,
    billNo
  );

  let rptQry = [];
  rptQry.push({ domain: req.headers.domain });
  if (fromDt && fromDt != "") {
    //console.log("fromDt",fromDt);
    fromDt = moment(fromDt)
      .hours(0)
      .minutes(0)
      .seconds(0);
    rptQry.push({ billDate: { $gt: fromDt.toDate() } });
  }

  if (toDt && toDt != "") {
    toDt = moment(toDt)
      .add(2, "days")
      .hours(0)
      .minutes(0)
      .seconds(0);
    rptQry.push({ billDate: { $lt: toDt.toDate() } });
  }

  if (metal && metal != "") rptQry.push({ metal: metal });
  if (category && category != "") rptQry.push({ category: category });
  if (product && product != "") rptQry.push({ product: product });
  if (billNo && billNo != "") rptQry.push({ billNo: billNo });

  console.log("rptQry", JSON.stringify(rptQry, 0, 2));

  Sales.find({
    $and: rptQry
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      console.log("Sales report retrival failed", error);
      res.status(400).send({ msg: "Sales retrival failed", error });
    });
};

exports.cancelSales = (req, res, next) => {
  const data = req.body;
  const domain = req.headers.domain;
  let billNo = req.params.billNo;

  console.log("inside update", billNo, domain);

  Sales
    .find({ billNo: billNo, domain: domain })
    .then(result => {
      console.log("founded result",JSON.stringify(result,0,2));
      if (result && result.length > 0) {
        async function start() {
          try {           

            result.map(val => {
              val.cancelled = data.cancelled;
              val.cancelledDate = data.cancelledDate;
              val.CancelledBy = data.CancelledBy;
              val.CancelledDescription = data.CancelledDescription;
              transaction.update("sales", { _id: val.id, domain: domain }, val);
            });
            const finalRes = await transaction.run();
            res
              .status(200)
              .send({
                msg: `Sales Bill Number [${billNo}] Cancelled successfully`
              });
          } catch (error) {
            res.status(400).send({ error, msg: "Sales updation failed" });
            console.log("Sales updation error =>", error);
            const rollBackObj = await transaction
              .rollback()
              .catch(console.error);
          } finally {
            transaction.clean();
          }
        }
        start();
      }else{
        res.status(400).send({ error, msg: "Sales bill not found" });
      }
    })
    .catch(error => {
      res.status(400).send({ error, msg: "Sales bill cancellation failed" });
    });
};
