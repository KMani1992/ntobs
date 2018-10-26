import * as SALES from '../actionTypes/Sales';

export function readSales(){

    return {
        type:SALES.READ_SALES,        
    }
}

export function readSalesSuccess(data){

    return {
        type:SALES.READ_SALES_SUCCESS,        
        data
    }
}

export function updateSalesList(data){

    return {
        type:SALES.UPDATE_SALES_LIST,        
        data
    }
}

export function editSales(data){

    return {
        type:SALES.UPDATE_SALES,        
        data
    }
}


export function editSalesPopulate(data){

    return {
        type:SALES.EDIT_SALES_POPULATE,        
        data
    }
}

export function createSales(data){

    return {
        type:SALES.CREATE_SALES,        
        data
    }
}

export function cancelSaleBill(data){

    return {
        type:SALES.CANCEL_SALE_BILL, 
        data       
    }
}

export function clearCancelSaleBill(data){

    return {
        type:SALES.CLEAR_CANCEL_SALE_BILL, 
        data       
    }
}