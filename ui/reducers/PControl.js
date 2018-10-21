import * as PCONTROL from "../actionTypes/PControl";
import PControlState from './PControlState';

export default (state = PControlState, action) => {

const {type,data}=action;

const nextState ={
  ...state
};

  switch (type) {    
    case PCONTROL.CREATE_PCONTROL:
      return data;
    case PCONTROL.READ_PCONTROL:
      return data;
      case PCONTROL.READ_PCONTROL_SUCCESS:
      return data;
    case PCONTROL.UPDATE_PCONTROL:
      return data;
    case PCONTROL.EDIT_PCONTROL_POPULATE:
      return data;
    default:
      return nextState;
  }
};
