import *  as HomeActionTypes from '../actionTypes/Home';

export default (state=[],action)=>{
    switch(action.type){
        case HomeActionTypes.GET_HOME_DATA:
        return {state};
        default:
        return {state};
    }
}