import * as types from "../../../constants/ActionTypes";

export const login = (name, pass) => {
  return {
    type: types.XAHC_LOGIN,
    //
    payload: {
      name,
      pass
    }
  };
};
export const logout = (name, pass) => {
  return {
    type: types.XAHC_LOGOUT
  };
};
