import * as PRODUCT from "../actionTypes/Product";
import ProductState from "./ProductState";

export default (state = ProductState, action) => {

const {type,data}=action;

const nextState ={
  ...state
};

  switch (type) {        
      case PRODUCT.READ_PRODUCT_SUCCESS:
      return {
        ...nextState,
        productList:[...data]        
      };   
    case PRODUCT.EDIT_PRODUCT_POPULATE:
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



