import * as PCONTROL from '../actionTypes/PControl';

export function readPControl(){

    return {
        type:PCONTROL.READ_PCONTROL,        
    }
}

export function readPControlSucces(data){

    return {
        type:PCONTROL.READ_PCONTROL_SUCCESS,        
        data
    }
}

export function editPControl(data){

    return {
        type:PCONTROL.UPDATE_PCONTROL,        
        data
    }
}


export function editPControlPopulate(data){

    return {
        type:PCONTROL.EDIT_PCONTROL_POPULATE,        
        data
    }
}

export function createPControl(data){

    return {
        type:PCONTROL.CREATE_PCONTROL,        
        data
    }
}