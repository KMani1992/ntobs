const Operator = require("mongoose").model("operator");
const util = require("../../util/util");
const mongooseTransaction = require("mongoose-transactions");
const transaction = new mongooseTransaction();

var mongoose = require("mongoose");


exports.signupOperator = (req, res, next) => {

console.log("operator auth details", req.body);
  let operator = req.body;
  Operator.find({
    $and: [{ domain: operator.domain }]
  })
    .then(result => {
      //console.log("search", result);
      if (result.length > 0) {

        operator.password = util.hashPassword(operator.password);  
  Operator.create(operator)
    .then(result => {
      res.status(200).send({ msg: "Signed Up successfully", result });
    })
    .catch(error => {
      res.status(400).send({ msg: "Sign Up failed", error });
    });
        
      } else {
        res.status(401).send({
          msg: "Sign Up Failed, Please Try Agin",
          error: { error: { name: "Invalid domain" } }
        });
      }
    })
    .catch(error => {
      console.log("Sign Up failed", error);
      res.status(400).send({ msg: "Sign Up failed", error });
    });

  
  
};

exports.createOperator = (req, res, next) => {
  let operator = req.body;
  operator.password = util.hashPassword(operator.password);  
  Operator.create(operator)
    .then(result => {
      res.status(200).send({ msg: "Operator created successfully", result });
    })
    .catch(error => {
      res.status(400).send({ msg: "Operator creation failed", error });
    });
};

exports.getAllOperator = (req, res, next) => {
  Operator.find({ domain: req.headers.domain })
    .sort({ _id: -1 })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      console.log("operator retrival failed", err);
      res.status(400).send({ msg: "Operator retrival failed", error });
    });
};

exports.getOperatorById = (req, res, next, id) => {
  console.log("operator id", req.params.id);
  Operator.find({
    $and: [
      { domain: req.headers.domain },
      { _id: new mongoose.Types.ObjectId(req.params.id) }
    ]
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(error => {
      console.log("Operator retrival failed", error);
      res.status(400).send({ msg: "Operator retrival failed", error });
    });
};

exports.login = (req, res, next) => {
  console.log("operator auth details", req.body);
  const authInfo = req.body;  
  Operator.find({
    $and: [{ domain: authInfo.domain }, { loginId: authInfo.login },{status:"active"}]
  })
    .then(result => {
      //console.log("search", result);
      if (result.length > 0) {
        const validPassword = util.verifyPassword(
          authInfo.password,
          result[0].password
        );

        if (validPassword) {
          res.status(200).send({ msg: "Login Success", operator: result[0] });
        } else {
          res.status(401).send({
            msg: "Login Failed, Please Try Agin",
            error: { error: { name: "Invalid password" } }
          });
        }
      } else {
        res.status(401).send({
          msg: "Login Failed, Please Try Agin",
          error: { error: { name: "Invalid login/domain/not yet activated " } }
        });
      }
    })
    .catch(error => {
      console.log("Login failed", error);
      res.status(400).send({ msg: "Login failed", error });
    });
};

exports.updateOperator = (req, res, next) => {
  Operator.findOne(
    {
      $and: [
        { domain: req.headers.domain },
        { loginId: req.body.loginId },
        { _id: { $ne: req.params.id } }
      ]
    },
    (err, result) => {
      if (err) {
        res.status(400).send({ msg: "Operator updation failed", err });
        return;
      }

      if (result) {
        let error = new Error();
        error.name = "DUP_LOGIN";
        res.status(400).send({ msg: "Operator updation failed", error });
        return;
      }

      Operator.findOneAndUpdate(
        {
          $and: [
            { domain: req.headers.domain },
            { _id: new mongoose.Types.ObjectId(req.params.id) }
          ]
        },
        req.body
      )
        .then(result => {
          res
            .status(200)
            .send({ result, msg: "Operator updated successfully" });
        })
        .catch(error => {
          res.status(400).send({ msg: "Operator updation failed", error });
        });
    }
  );
};
