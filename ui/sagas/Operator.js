import { takeLatest } from "redux-saga";
import * as OPERATOR_TYPE from "../actionTypes/Operator";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as operatorActionCreators from "../actionCreators/Operator";

export function* saveOperator(action) {
  try {
    console.log("inside operator", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.CREATE_OPERATOR, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(operatorActionCreators.readOperatorSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save operator saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* editOperator(action) {
  try {
    console.log("inside operator edit", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.UPDATE_OPERATOR, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(operatorActionCreators.readOperatorSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save operator saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* readOperator(action) {
  try {
    console.log("inside operator", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.READ_OPERATOR, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(operatorActionCreators.readOperatorSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save operator saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* operatorWatcher() {
  yield [
    takeLatest(OPERATOR_TYPE.CREATE_OPERATOR, saveOperator),
    takeLatest(OPERATOR_TYPE.UPDATE_OPERATOR, editOperator),
    takeLatest(OPERATOR_TYPE.READ_OPERATOR, readOperator)
  ];
}
