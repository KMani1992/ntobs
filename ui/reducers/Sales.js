import * as SALES from "../actionTypes/Sales";
export default (state = {}, action) => {
  switch (action.type) {    
    case SALES.CREATE_SALES:
      return type.data;
    case SALES.READ_SALES:
      return type.data;
      case SALES.READ_SALES_SUCCESS:
      return type.data;
    case SALES.UPDATE_SALES:
      return type.data;
    case SALES.EDIT_SALES_POPULATE:
      return type.data;
    default:
      return state;
  }
};
