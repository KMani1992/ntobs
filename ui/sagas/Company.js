import { takeLatest, put } from "redux-saga/effects";
import * as COMPANY_TYPE from "../actionTypes/Company";
import * as constants from "../util/constants";
import { doPost } from "../util/httpWrapper";
import * as commonActionCreators from "../actionCreators/Common";

export function* saveCompany(action) {
  try {
    console.log("inside company",action);
    yield put(commonActionCreators.loading(true));
    const response = yield doPost(constants.COMPANY, action.data);
    console.log("response",response);
    if (response.status == 201) {
      yield put(commonActionCreators.success(response));
    } else {
      yield put(commonActionCreators.error(response));
    }
  } catch (error) {
      console.error("error orrcued in savecompany saga",error);
    yield put(commonActionCreators.error(error));
  }
}

export function* companyWatcher() {
  yield [
      takeLatest(COMPANY_TYPE.CREATE_COMPANY, saveCompany),
  ];
}
