import * as SALES from "../actionTypes/Sales";

const initState={billNo:"",CancelledDescription:""};

export default (state = initState, action) => {

const {type,data}=action;

const nextState ={
  ...state
};

  switch (type) {        
      case SALES.CLEAR_CANCEL_SALE_BILL:
      return {
        ...nextState,
        ...initState
      };         
    default:
      return nextState;
  }
};



