import { takeLatest, put } from "redux-saga/effects";
import * as OPERATOR_TYPE from "../actionTypes/Operator";
import * as constants from "../util/constants";
import { doPost, doGet,doPut } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as operatorActionCreators from "../actionCreators/Operator";
import * as util from "../util/util";



export function* signupOperator(action) {
  try {
    console.log("inside signupOperator operator", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.SIGNUP_OPERATOR, action.data);
    console.log("response signupOperator", response);
    if (response.status == 200) {      
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save operator saga", error);
    yield put(commonActionCreators.error(error));
  }
}


export function* saveOperator(action) {
  try {
    console.log("inside operator", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.CREATE_OPERATOR, action.data);
    console.log("response", response);
    if (response.status == 200) {
      const readResponse = yield doGet(constants.READ_OPERATOR);
      console.log("readResponse", readResponse);
      yield put(operatorActionCreators.readOperatorSucces(readResponse.data));
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
    const response = yield doPut(constants.UPDATE_OPERATOR + action.data.id, action.data);
    console.log("response", response);
    if (response.status == 200) {
      const readResponse = yield doGet(constants.READ_OPERATOR);
      console.log("readResponse", readResponse);
      yield put(operatorActionCreators.readOperatorSucces(readResponse.data));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save operator saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* readOperator() {
  try {
    console.log("inside operator");
    yield put(commonActionCreators.loading(true));
    const response = yield doGet(constants.READ_OPERATOR);
    console.log("response", response.data);
    if (response.status == 200) {
      yield put(operatorActionCreators.readOperatorSucces(response.data));
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
    takeLatest(OPERATOR_TYPE.SIGNUP_OPERATOR, signupOperator),    
    takeLatest(OPERATOR_TYPE.UPDATE_OPERATOR, editOperator),
    takeLatest(OPERATOR_TYPE.READ_OPERATOR, readOperator)
  ];
}
