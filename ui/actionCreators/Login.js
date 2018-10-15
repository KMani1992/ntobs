import * as LOGIN from '../actionTypes/Login';

export function doLogin(data){
    return {
        type:LOGIN.DO_LOGIN,
        data
    }
}