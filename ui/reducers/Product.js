import * as PRODUCT from "../actionTypes/Product";
import ProductState from "./ProductState";

export default (state = ProductState, action) => {

const {type,data}=action;
const nextState={
  ...state
}

  switch (action.type) {    
    case PRODUCT.CREATE_PRODUCT:
      return data;
    case PRODUCT.READ_PRODUCT:
      return data;
    case PRODUCT.READ_PRODUCT_SUCCESS:
      return data;
    case PRODUCT.UPDATE_PRODUCT:
      return data;
    case PRODUCT.EDIT_PRODUCT_POPULATE:
      return data;
    default:
      return nextState;
  }
};
