import * as PCONTROL from "../actionTypes/PControl";
import PControlState from './PControlState';

export default (state = PControlState, action) => {

const {type,data}=action;

const nextState ={
  ...state
};

  switch (type) {        
      case PCONTROL.READ_PCONTROL_SUCCESS:
      return {
        ...nextState,
        pcontrolList:[...data]        
      };   
    case PCONTROL.READ_PCONTROL_VAL_SUCCESS:
      return {
        ...nextState,
        pcontrolVal:data
      };   
    case PCONTROL.EDIT_PCONTROL_POPULATE:
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


