import * as types from "../../../constants/ActionTypes";

import Immutable from "immutable";
const initState = Immutable.Map({
  loginStatus: {},
  logoutStatus: {},
  userInfo: {}
});
const login = (state = initState, action) => {
  switch (action.type) {
    case types.LOGIN_SAGA:
      if (action.loginStatus.res.rtn_code == 0) {
        return state
          .set("loginStatue", 1)
          .set("logoutStatus", 0)
          .set("userInfo", action.loginStatus.res);
      } else if (
        action.loginStatus.res.rtn_code == "1003" ||
        action.loginStatus.res.rtn_code == "1010"
      ) {
        message.info("用户名或密码错误！");
      } else {
        message.info("登录失败！");
        return state.set("loginStatue", 0).set("logoutStatus", 0);
      }
    case types.LOGOUT_SAGA:
      if (action.logoutStatus.res.rtn_code == 0) {
        return state.set("logoutStatus", 1).set("loginStatue", 3);
      }
      return state.set("logoutStatus", 0).set("loginStatue", 3);
    default:
      return state;
  }
};

export default login;
