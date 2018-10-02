const cons=require('../../util/constants');
const companyController=require('./company.controller');

module.exports=(api)=>{
    
    api.route(cons.company)
    .post(companyController.createCompany)
    .get(companyController.getAllCompany);

    api.route(cons.updateCompany)
    .put(companyController.updateCompany);

    api.route(cons.readCompany)
    .get(companyController.getCompanyByDomainName);
}