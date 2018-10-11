import *  as HomeActionTypes from '../actionTypes/Home';
import * as CompanyInitialState from '../state/Company';

export default (state = CompanyInitialState, action) => {

    const nextState = {...state};

    switch (action.type) {
        case HomeActionTypes.HANDLE_CHANGE:
            return {
                ...nextState,
                company:{
                    ...nextState.company
                }                
            };
        default:
            return {
                 state
            };
    }
}