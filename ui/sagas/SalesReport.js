import { takeLatest,put } from "redux-saga/effects";
import * as SALES_REPORT_TYPE from "../actionTypes/SalesReport";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as salesReportActionCreators from "../actionCreators/SalesReport";


export function* readSalesReport(action) {
  try {
    console.log("inside SalesReport", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.READ_SALES_REPORT, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(salesReportActionCreators.readSalesReportSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save Sales Report saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* salesReportWatcher() {
  yield [
    takeLatest(SALES_REPORT_TYPE.READ_SALES_REPORT, readSalesReport)
  ];
}
