const PControl = require("mongoose").model("parameter");
const PControlRef = require("mongoose").model("parameterRef");
const util = require("../../util/util");
const mongooseTransaction = require("mongoose-transactions");
const transaction = new mongooseTransaction();

var mongoose = require("mongoose");

exports.createParameter = (req, res, next) => {
  let parameter = req.body;
  parameter.domain = req.headers.domain;
  PControl.create(parameter)
    .then(result => {
      PControlRef.create(parameter)
        .then(resultRef => {
          console.log("resultRef", resultRef);
          res
            .status(200)
            .send({ msg: "Parameter created successfully", result });
        })
        .catch(error => {
          res.status(400).send({ msg: "Parameter creation failed in reference", error });
        });
    })
    .catch(error => {
      res.status(400).send({ msg: "Parameter creation failed", error });
    });
};

exports.getAllParameter = (req, res, next) => {
  PControl.find({ domain: req.headers.domain })
    .sort({ _id: -1 })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      console.log("Parameter retrival failed", err);
      res.status(400).send({ msg: "Parameter retrival failed", error });
    });
};

exports.getParameterByKey = (req, res, next) => {
  console.log("parameter Key name", req.params.key);

  let valueList = [],
    count = 0,
    keyList = [];

  keyList = req.params.key.split(",");
  keyList.some(key => {
    console.log("process key key", key);
    PControl.findOne({
      $and: [
        { domain: req.headers.domain },
        { status: "active" },
        { name: key }
      ]
    })
      .then(result => {
        count = count + 1;
        valueList.push(result);
        if (count == keyList.length) {
          const resArr = [];
          keyList.forEach(skey => {
            let found = { key: skey, value: "", found: false };
            valueList.forEach(val => {
              if (val != null && val.name == skey) {
                found = val;
              }
            });
            resArr.push(found);
          });
          res.status(200).send(resArr);
        }
      })
      .catch(error => {
        console.log("Parameter retrival failed", error);
        res.status(400).send({ msg: "Parameter retrival failed", error });
        return false;
      });
  });
};

exports.updateParameter = (req, res, next) => {
  PControl.findOne(
    {
      $and: [
        { domain: req.headers.domain },
        { name: req.body.name },
        { _id: { $ne: req.params.id } }
      ]
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ msg: "Parameter updation failed", err });
        return;
      }

      if (result) {
        let error = new Error();
        error.name = "DUP_PARAM";
        res.status(400).send({ msg: "Parameter updation failed", error });
        return;
      }

      PControl.findOneAndUpdate(
        {
          $and: [
            { domain: req.headers.domain },
            { _id: new mongoose.Types.ObjectId(req.params.id) }
          ]
        },
        req.body
      )
        .then(result => {
          PControlRef.create(req.body)
            .then(resultRef => {
              console.log("resultRef", resultRef);
              res
                .status(200)
                .send({ result, msg: "Parameter updated successfully" });
            })
            .catch(error => {
              res.status(400).send({ msg: "Parameter updation failed in reference", error });
            });
        })
        .catch(error => {
          res.status(400).send({ msg: "Parameter updation failed", error });
        });
    }
  );
};
