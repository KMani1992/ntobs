import { takeLatest } from "redux-saga";
import * as SALES_TYPE from "../actionTypes/Sales";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as salesActionCreators from "../actionCreators/Sales";

export function* saveSales(action) {
  try {
    console.log("inside Sales", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.CREATE_SALES, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(salesActionCreators.readSalesSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Sales saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* editSales(action) {
  try {
    console.log("inside Sales edit", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.UPDATE_SALES, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(salesActionCreators.readSalesSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Sales saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* readSales(action) {
  try {
    console.log("inside Sales", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.READ_SALES, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(salesActionCreators.readSalesSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Sales saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* salesWatcher() {
  yield [
    takeLatest(SALES_TYPE.CREATE_SALES, saveSales),
    takeLatest(SALES_TYPE.UPDATE_SALES, editSales),
    takeLatest(SALES_TYPE.READ_SALES, readSales)
  ];
}
