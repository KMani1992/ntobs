const cons = {};

const apiUrl = "/api";
cons.readCompany = apiUrl + "/company/own";
cons.company = apiUrl + "/company";
cons.updateCompany = apiUrl + "/company/update/:id";

cons.readParameterControl = apiUrl + "/parameter/:id";
cons.createParameterControl = apiUrl + "/parameter";
cons.updateParameterControl = apiUrl + "/parameter/:id";

cons.readProduct = apiUrl + "/product/:id";
cons.createProduct = apiUrl + "/product";
cons.updateProduct = apiUrl + "/product/:id";

cons.readOperator = apiUrl + "/:id/operator/single";
cons.createOperator = apiUrl + "/operator";
cons.updateOperator = apiUrl + "/operator/:id";
cons.login = apiUrl + "/auth/login";

cons.readSales = apiUrl + "/sales/:billNo";
cons.createSales = apiUrl + "/sales";
cons.updateSales = apiUrl + "/sales/:billNo";

module.exports = cons;