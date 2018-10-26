import * as SALES_REPORT from '../actionTypes/SalesReport';

export function readSalesReport(data){

    return {
        type:SALES_REPORT.READ_SALES_REPORT, 
        data       
    }
}




export function readSalesReportSucces(data){

    return {
        type:SALES_REPORT.READ_SALES_REPORT_SUCCESS,        
        data
    }
}
