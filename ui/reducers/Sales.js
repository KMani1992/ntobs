import * as SALES from "../actionTypes/Sales";
import SalesState from "./SalesState";

export default (state = SalesState, action) => {

const {type,data}=action;

const nextState ={
  ...state
};

  switch (type) {        
      case SALES.UPDATE_SALES_LIST:
      return {
        ...nextState,
        ...data        
      };   
      case SALES.READ_SALES_SUCCESS:
      return {
        ...nextState,
        ...data        
      };   
    case SALES.EDIT_SALES_POPULATE:
      console.log("red e pop",data);
      return {
        ...nextState,
        default:{
          ...data
        }
      }
    default:
      return nextState;
  }
};



