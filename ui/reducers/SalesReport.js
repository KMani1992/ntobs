import * as SALES_REPORT from "../actionTypes/SalesReport";
import SalesReportState from './SalesReportState';

export default (state = SalesReportState, action) => {

  const nextState={
    ...state
  }
  
  const {type,data}=action;

  switch (type) {    
    case SALES_REPORT.READ_SALES_REPORT:
      return data;    
      case SALES_REPORT.READ_SALES_REPORT_SUCCESS:
      return data;
    default:
      return nextState;
  }
};
