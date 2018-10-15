import * as COMPANY_TYPE from '../actionTypes/Company';

export function createCompany(data){
    console.log("inside action creator",data)
    return {
        type:COMPANY_TYPE.CREATE_COMPANY,
        data
    }
}

export function clearState(){
    console.log("inside init state action")
    return {
        type:COMPANY_TYPE.CLEAR_STATE,
        
    }
}
