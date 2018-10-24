import { takeLatest,put } from "redux-saga/effects";
import * as PRODUCT_TYPE from "../actionTypes/Product";
import * as constants from "../util/constants";
import { doPost,doGet,doPut } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as productActionCreators from "../actionCreators/Product";

export function* saveProduct(action) {
  try {
    console.log("inside Product", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.CREATE_PRODUCT, action.data);
    console.log("response", response);
    if (response.status == 200) {
      const readResponse = yield doGet(constants.READ_PRODUCT);
      console.log("readResponse", readResponse);
      yield put(productActionCreators.readProductSucces(readResponse.data));            
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Product saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* editProduct(action) {
  try {
    console.log("inside Product edit", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPut(constants.UPDATE_PRODUCT + action.data.id, action.data);
    console.log("response", response);
    if (response.status == 200) {
      const readResponse = yield doGet(constants.READ_PRODUCT);
      console.log("readResponse", readResponse);
      yield put(productActionCreators.readProductSucces(readResponse.data));                  
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Product saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* readProduct() {
  try {
    console.log("inside Product");
    yield put(commonActionCreators.loading(true));
    const response = yield doGet(constants.READ_PRODUCT);
    console.log("response", response);
    if (response.status == 200) {
      yield put(productActionCreators.readProductSucces(response.data));      
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Product saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* productWatcher() {
  yield [
    takeLatest(PRODUCT_TYPE.CREATE_PRODUCT, saveProduct),
    takeLatest(PRODUCT_TYPE.UPDATE_PRODUCT, editProduct),
    takeLatest(PRODUCT_TYPE.READ_PRODUCT, readProduct)
  ];
}
