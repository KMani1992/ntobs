const cons = require('../../util/constants');
const productController=require('./product.controller');

module.exports=(api)=>{
    
    api.route(cons.createProduct)
    .post(productController.createProduct)
    .get(productController.getAllProduct);

    api.route(cons.updateProduct)
    .put(productController.updateProduct);

    api.route(cons.readProduct)
    .get(productController.getProductById);
}