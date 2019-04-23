import * as types from "../../../constants/ActionTypes";
import * as StatusCode from "../../../constants/StatusCode";

import Immutable from "immutable";
const initState = Immutable.Map({
  moviesInfoData: {}
});

const moviesInfo = (state = initState, action) => {
  // console.log("moviesInfo11111", action);
  switch (action.type) {
    case types.SAGA_GET:
      switch (action.param.from) {
        case "moviesInfo":
          // console.log("moviesInfoDataReducer", action.data.res);
          if (action.data.res) {
            return state.set("moviesInfoData", action.data.res);
          } else {
            return state;
          }
      }
      // console.log("moviesInfoDataReducer222", state);

      return state;
      break;
    default:
      return state;
  }
};

export default moviesInfo;
