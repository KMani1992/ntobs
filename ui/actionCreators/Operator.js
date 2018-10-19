import * as OPERATOR from '../actionTypes/Operator';

export function readOperator(){

    return {
        type:OPERATOR.READ_OPERATOR,        
    }
}

export function readOperatorSucces(data){

    return {
        type:OPERATOR.READ_OPERATOR_SUCCESS,        
        data
    }
}

export function editOperator(data){

    return {
        type:OPERATOR.UPDATE_OPERATOR,        
        data
    }
}


export function editOperatorPopulate(data){

    return {
        type:OPERATOR.EDIT_OPERATOR_POPULATE,        
        data
    }
}

export function createOperator(data){

    return {
        type:OPERATOR.CREATE_OPERATOR,        
        data
    }
}