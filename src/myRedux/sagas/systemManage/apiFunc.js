import ServiceApi from "../../../network/serviceApi";

export const loginApi = param => {
  return ServiceApi.login(param).then(res => res);
};

export const logoutApi = param => {
  return ServiceApi.logout(param).then(res => res);
};

export const addApi = param => {
  // console.log("addApi", param);
  return ServiceApi.add(param).then(res => res);
};

export const delApi = param => {
  return ServiceApi.del(param).then(res => res);
};

export const getApi = param => {
  // console.log("getApiparam", param);
  return ServiceApi.get(param).then(res => res);
};

export const updateApi = param => {
  return ServiceApi.update(param).then(res => res);
};

export const searchApi = param => {
  return ServiceApi.search(param).then(res => res);
};
