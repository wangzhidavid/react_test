import { put, call } from "redux-saga/effects";
import * as actionTypes from "../../../constants/ActionTypes";
import {
  addApi,
  delApi,
  getApi,
  updateApi,
  searchApi,
  loginApi
} from "./apiFunc";

export function* login(payload) {
  try {
    var loginStatus = yield call(loginApi, payload);
    yield put({ type: actionTypes.LOGIN_SAGA, loginStatus: loginStatus });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}
export function* loginFlow({ payload }) {
  const { name, pass } = payload;
  let response = yield call(login, payload);
  //let request = yield take(actionTypes.XAHC_LOGIN)
  //yield call(login)
}

/**
   * Fork 执行一个非阻塞操作。
    Take 暂停并等待action到达。
    Race 同步执行多个 effect，然后一旦有一个完成，取消其他 effect。
    Call 调用一个函数，如果这个函数返回一个 promise ，那么它会阻塞 saga，直到promise成功被处理。
    Put 触发一个Action。
    Select 启动一个选择函数，从 state 中获取数据。
   */

export function* addMethod({ data, params, from }) {
  yield call(add, { data, params, from });
}
export function* add(param) {
  try {
    let data = yield call(addApi, param);
    yield put({ type: actionTypes.SAGA_ADD, data: data, param });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* delMethod({ id, from }) {
  yield call(del, { id, from });
}
export function* del(param) {
  // console.log("delparam", param);
  try {
    let data = yield call(delApi, param);
    yield put({ type: actionTypes.SAGA_DEL, data: data, param });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* getMethod({ page, params, from }) {
  yield call(get, { page, params, from });
}
export function* get(param) {
  // console.log("moviesInfo00000", param);
  try {
    let data = yield call(getApi, param);
    // console.log("moviesInfo00", data);
    yield put({ type: actionTypes.SAGA_GET, data: data, param });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* updateMethod({ data, from }) {
  yield call(update, { data, from });
}
export function* update(param) {
  try {
    let data = yield call(updateApi, param);
    yield put({ type: actionTypes.SAGA_UPDATE, data: data, param });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* searchMethod({ page, params, from }) {
  yield call(search, { page, params, from });
}
export function* search(param) {
  try {
    let data = yield call(searchApi, param);
    yield put({ type: actionTypes.SAGA_SEARCH, data: data, param });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}
