import { takeLatest, put } from "redux-saga/effects";
import * as COMMON from "../actionTypes/Common";
import * as LOGIN from "../actionTypes/Login";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";

export function* doLogin(action) {
  try {
    console.log("inside doLogin saga", action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.LOGIN, action.data);
    console.log("do login response received", response);
    if (response.status == 200) {
        window.sessionStorage.setItem("ntobs-login",JSON.stringify(response.data));
        yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
    console.log("do login error recived", error);
    yield put(commonActionCreators.error(error));
  }
}

export function* loginWatcher() {
  yield [takeLatest(LOGIN.DO_LOGIN, doLogin)];
}
