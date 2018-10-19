const apiUrl = "/api";

export const COMPANY = apiUrl + "/company";
export const LOGIN = apiUrl + "/auth/login";

export const CREATE_PARAM_CONTROL = apiUrl + "/parameter";
export const READ_PARAM_CONTROL = apiUrl + "/parameter";
export const UPDATE_PARAM_CONTROL = apiUrl + "/parameter/:id";


export const CREATE_PRODUCT = apiUrl + "/product";
export const READ_PRODUCT = apiUrl + "/product";
export const UPDATE_PRODUCT = apiUrl + "/product/:id";

export const READ_OPERATOR = apiUrl + "/:id/operator/single";
export const CREATE_OPERATOR = apiUrl + "/operator";
export const UPDATE_OPERATOR = apiUrl + "/operator/:id";


export const READ_SALES = apiUrl + "/sales/:billNo";
export const CREATE_SALES = apiUrl + "/sales";
export const UPDATE_SALES = apiUrl + "/sales/:billNo";

export const READ_SALES_REPORT = apiUrl + "/sales/report";

