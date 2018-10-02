const cons = require('../../util/constants');
const salesController=require('./sales.controller');

module.exports=(api)=>{
    
    api.route(cons.createSales)
    .post(salesController.createSales)
    .get(salesController.getAllSales);

    api.route(cons.updateSales)
    .put(salesController.updateSales);

    api.route(cons.readSales)
    .get(salesController.getSalesByBillNo);
}