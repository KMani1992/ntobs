import * as PRODUCT from '../actionTypes/Product';

export function readProduct(){

    return {
        type:PRODUCT.READ_PRODUCT,        
    }
}

export function readProductSucces(data){

    return {
        type:PRODUCT.READ_PRODUCT_SUCCESS,        
        data
    }
}

export function editProduct(data){

    return {
        type:PRODUCT.UPDATE_PRODUCT,        
        data
    }
}


export function editProductPopulate(data){

    return {
        type:PRODUCT.EDIT_PRODUCT_POPULATE,        
        data
    }
}

export function createProduct(data){

    return {
        type:PRODUCT.CREATE_PRODUCT,        
        data
    }
}