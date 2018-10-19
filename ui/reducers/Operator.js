import * as OPERATOR from "../actionTypes/Operator";
export default (state = {}, action) => {
  switch (action.type) {    
    case OPERATOR.CREATE_OPERATOR:
      return type.data;
    case OPERATOR.READ_OPERATOR:
      return type.data;
      case OPERATOR.READ_OPERATOR_SUCCESS:
      return type.data;
    case OPERATOR.UPDATE_OPERATOR:
      return type.data;
    case OPERATOR.EDIT_OPERATOR_POPULATE:
      return type.data;
    default:
      return state;
  }
};
