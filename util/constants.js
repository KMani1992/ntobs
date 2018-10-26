const cons = {};

const apiUrl = "/api";
cons.readCompany = apiUrl + "/company/own";
cons.company = apiUrl + "/company";
cons.updateCompany = apiUrl + "/company/update/:id";

cons.readParameterControl = apiUrl + "/parameter";
cons.createParameterControl = apiUrl + "/parameter";
cons.updateParameterControl = apiUrl + "/parameter/:id";
cons.readParameterControlVal = apiUrl + "/parameter/:key";

cons.readProduct = apiUrl + "/product";
cons.createProduct = apiUrl + "/product";
cons.updateProduct = apiUrl + "/product/:id";

cons.readOperator = apiUrl + "/:id/operator/single";
cons.createOperator = apiUrl + "/operator";
cons.updateOperator = apiUrl + "/operator/:id";
cons.signupOperator = apiUrl + "/operator/signup";
cons.login = apiUrl + "/auth/login";


cons.readSales = apiUrl + "/sales";
cons.createSales = apiUrl + "/sales";
cons.updateSales = apiUrl + "/sales/:billNo";

cons.readSalesRpt = apiUrl + "/sales/rpt";

module.exports = cons;