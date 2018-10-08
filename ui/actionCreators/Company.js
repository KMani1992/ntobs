import * as COMPANY from '../actionTypes/Company';

export function createCompany(data){
    return {
        type:COMPANY.CREATE_COMPANY,
        data
    }
}