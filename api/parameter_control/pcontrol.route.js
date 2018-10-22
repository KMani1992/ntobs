const cons = require('../../util/constants');
const parameterController=require('./pcontrol.controller');

module.exports=(api)=>{
    
    api.route(cons.createParameterControl)
    .post(parameterController.createParameter)
    .get(parameterController.getAllParameter);

    api.route(cons.updateParameterControl)
    .put(parameterController.updateParameter);

    api.route(cons.readParameterControlVal)
    .get(parameterController.getParameterByKey);
}