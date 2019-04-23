import * as types from "../../../constants/ActionTypes";

export const get = (page = null, params = null, from = null) => {
  return {
    type: types.XAHC_GET,
    page: page,
    params: params,
    from: from
  };
};

//搜索查询
export const search = (page = null, params = null, from = null) => {
  return {
    type: types.XAHC_SEARCHGET,
    page: page,
    params: params,
    from: from
  };
};

//添加
export const add = (data = null, params = null, from = null) => {
  return {
    type: types.XAHC_ADD,
    data: data,
    params: params,
    from: from
  };
};
//删除
export const del = (id = null, from = null) => {
  return {
    type: types.XAHC_DEL,
    id: id,
    from: from
  };
};
//更新
export const update = (data = null, from = null) => {
  return {
    type: types.XAHC_UPDATE,
    data: data,
    from: from
  };
};
