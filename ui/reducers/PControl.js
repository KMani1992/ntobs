import * as PCONTROL from "../actionTypes/PControl";
export default (state = {}, action) => {
  switch (action.type) {    
    case PCONTROL.CREATE_PCONTROL:
      return type.data;
    case PCONTROL.READ_PCONTROL:
      return type.data;
      case PCONTROL.READ_PCONTROL_SUCCESS:
      return type.data;
    case PCONTROL.UPDATE_PCONTROL:
      return type.data;
    case PCONTROL.EDIT_PCONTROL_POPULATE:
      return type.data;
    default:
      return state;
  }
};
