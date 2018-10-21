import { takeLatest,put } from "redux-saga/effects";
import * as PCONTROl_TYPE from "../actionTypes/PControl";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";
import * as pcontrolActionCreators from "../actionCreators/PControl";

export function* savePControl(action) {
  try {
    console.log("inside pcontrol", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.CREATE_PARAM_CONTROL, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(pcontrolActionCreators.readPControlSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save PControl saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* editPControl(action) {
  try {
    console.log("inside PControl edit", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.UPDATE_PARAM_CONTROL, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(pcontrolActionCreators.readPControlSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save PControl saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* readPControl(action) {
  try {
    console.log("inside PControl", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.READ_PARAM_CONTROL, action.data);
    console.log("response", response);
    if (response.status == 200) {
      yield put(pcontrolActionCreators.readPControlSucces(response));
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.error("error orrcued in save PControl saga", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* pcontrolWatcher() {
  yield [
    takeLatest(PCONTROl_TYPE.CREATE_PCONTROL, savePControl),
    takeLatest(PCONTROl_TYPE.UPDATE_PCONTROL, editPControl),
    takeLatest(PCONTROl_TYPE.READ_PCONTROL, readPControl)
  ];
}
