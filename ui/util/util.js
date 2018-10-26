export const HOME="/";
export const LOGIN="/login";
export const SIGNUP="/signup";
export const COMPANY="/company";

export const DASHBOARD="/dashboard";
export const OPERATOR="/operator";
export const PCONTROL="/pcontrol";
export const PRODUCT="/product";
export const SALES="/sales";
export const SALES_RPT="/sales-report"
export const SALES_CANCEL="/sales-cancel"

export const getUserName=()=>{
    const sessionUser = JSON.parse(
      window.localStorage.getItem("ntobs-login")
    );

    return sessionUser ? sessionUser.operator.name : null;
}

export const getDomain=()=>{
    const sessionUser = JSON.parse(
      window.localStorage.getItem("ntobs-login")
    );

    return sessionUser ? sessionUser.operator.domain : null;
}

export const getOperatorId=()=>{
    const sessionUser = JSON.parse(
      window.localStorage.getItem("ntobs-login")
    );

    return sessionUser ? sessionUser.operator._id : null;
}

export const clearLogin=()=>{
  window.localStorage.removeItem("ntobs-login");
}