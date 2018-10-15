import * as COMMON from '../actionTypes/Common';

export function clear(){
    console.log("inside common action clear");
    return {
        type:COMMON.CLEAR,
    }
}

export function loading(data){
    console.log("inside common action loading",data);
    return {
        type:COMMON.LOADING,
        data
    }
}

export function error(data){
    console.log("inside common action error",data);
    return {
        type:COMMON.ERROR,
        data
    }
}

export function success(data){
    console.log("inside common action success",data);
    return {
        type:COMMON.SUCCESS,
        data
    }
}