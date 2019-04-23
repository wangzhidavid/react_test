import "babel-polyfill";
import { takeEvery, takeLatest } from "redux-saga/effects";
import * as types from "../../constants/ActionTypes";

import {
  loginFlow,
  addMethod,
  delMethod,
  getMethod,
  updateMethod,
  searchMethod
} from "./systemManage/callApi";

export default function* mySaga() {
  yield [
    takeEvery(types.XAHC_LOGIN, loginFlow),
    // takeEvery(types.XAHC_LOGOUT, logoutFlow)
    //system
    // takeEvery(types.XAHC_ADD, addMethod),
    // takeEvery(types.XAHC_DEL, delMethod),
    takeEvery(types.XAHC_GET, getMethod)
    // takeEvery(types.XAHC_UPDATE, updateMethod),
    // takeEvery(types.XAHC_SEARCH, searchMethod)
  ];
}
