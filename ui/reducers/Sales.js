import * as SALES from "../actionTypes/Sales";
import SalesState from './SalesState';

export default (state = SalesState, action) => {

  const {type,data}=action;
  const nextState={
    ...state
  }

  switch (type) {    
    case SALES.CREATE_SALES:
      return data;
    case SALES.READ_SALES:
      return data;
      case SALES.READ_SALES_SUCCESS:
      return data;
    case SALES.UPDATE_SALES:
      return data;
    case SALES.EDIT_SALES_POPULATE:
      return data;
    default:
      return nextState;
  }
};
