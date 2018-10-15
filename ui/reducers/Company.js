import * as CompanyActionTypes from "../actionTypes/Company";

export default (state = {}, action) => {
  
  const nextState = { ...state };

  switch (action.type) {
    case CompanyActionTypes.CLEAR_STATE:
      return {
        ...nextState,        
      };
    case CompanyActionTypes.CREATE_COMPANY:
      return {        
        ...action.data,
      };
    default:
      return state;
  }
};
