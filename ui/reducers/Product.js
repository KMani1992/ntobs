import * as PRODUCT from "../actionTypes/Product";
export default (state = {}, action) => {
  switch (action.type) {    
    case PRODUCT.CREATE_PRODUCT:
      return type.data;
    case PRODUCT.READ_PRODUCT:
      return type.data;
    case PRODUCT.READ_PRODUCT_SUCCESS:
      return type.data;
    case PRODUCT.UPDATE_PRODUCT:
      return type.data;
    case PRODUCT.EDIT_PRODUCT_POPULATE:
      return type.data;
    default:
      return state;
  }
};
