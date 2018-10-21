import * as OPERATOR from "../actionTypes/Operator";
import OperatorInitialState from './OperatorState';

export default (state = OperatorInitialState, action) => {
  const {type,data}=action;
  const nextState={...state};
  
  switch (action.type) {            
      case OPERATOR.READ_OPERATOR_SUCCESS:
      return {
        ...nextState,
        operatorList:[...data]        
      };   
      case OPERATOR.EDIT_OPERATOR_POPULATE:
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
