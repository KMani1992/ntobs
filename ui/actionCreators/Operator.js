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
    console.log("edit oper popul",data);
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

export function signupOperator(data){

    return {
        type:OPERATOR.SIGNUP_OPERATOR,        
        data
    }
}