import * as SALES_REPORT from "../actionTypes/SalesReport";
export default (state = {}, action) => {
  switch (action.type) {    
    case SALES_REPORT.READ_SALES_REPORT:
      return type.data;    
      case SALES_REPORT.READ_SALES_REPORT_SUCCESS:
      return type.data;
    default:
      return state;
  }
};
