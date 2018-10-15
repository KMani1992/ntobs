const cons = require('../../util/constants');
const operatorController=require('./operator.controller');

module.exports=(api)=>{

    api.route(cons.login)
    .post(operatorController.login);

    api.route(cons.readOperator)
    .get(operatorController.getOperatorById);
        
    api.route(cons.createOperator)
    .post(operatorController.createOperator)
    .get(operatorController.getAllOperator);

    api.route(cons.updateOperator)
    .put(operatorController.updateOperator);
}