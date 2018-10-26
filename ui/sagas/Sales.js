import { takeLatest,put } from "redux-saga/effects";
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
      yield put(salesActionCreators.updateSalesList({salesList:[],saleListLength: 99999}));      
      yield put(commonActionCreators.success(response)); 
      //yield put(salesActionCreators.readSalesSuccess(response.data));           
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

export function* cancelSaleBill(action) {
  try {
    const {data}=action;
    console.log("inside cancel Sales bill", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPut(constants.UPDATE_SALES + data.billNo,
    data.cancelData);
    console.log("response", response);
    if (response.status == 200) {
      yield put(commonActionCreators.success(response));     
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Sales Report saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* salesWatcher() {
  yield [
    takeLatest(SALES_TYPE.CREATE_SALES, saveSales),
    takeLatest(SALES_TYPE.UPDATE_SALES, editSales),
    takeLatest(SALES_TYPE.READ_SALES, readSales),
    takeLatest(SALES_TYPE.CANCEL_SALE_BILL, cancelSaleBill)
  ];
}
