import {
  fetchApiPOST,
  fetchApiPUT,
  fetchApiDELETE,
  fetchApiGET
} from "./serviceFunc";
import URL from "./urlConfig.js";

class ServiceApi {
  static login(payload) {
    return new Promise(resolve => {
      let url = URL.login;
      let postdata = {
        userName: payload.name,
        password: payload.pass
      };
      fetchApiPOST(postdata, url, resolve);
    });
  }
  static logout(payload) {
    return new Promise(resolve => {
      let url = URL.logout;
      let postdata = {};
      fetchApiPOST(postdata, url, resolve);
    });
  }

  static add(payload) {
    let postdata = {};
    let url = "";
    return new Promise(resolve => {
      switch (payload.from) {
        case "moviesInfo":
          url = URL.moviesInfo;
          break;
      }

      if (param.from === "userMenuAll" || param.from === "pjmMenuList") {
        fetchApiPOST({}, url, resolve);
      }
      fetchApiPOST(postdata, url, resolve);
    });
  }

  static delete(payload) {
    let postdata = {};
    let url = "";
    return new Promise(resolve => {
      switch (payload.from) {
        case "moviesInfo":
          url = URL.moviesInfo;
          break;
      }

      if (param.from === "userMenuAll" || param.from === "pjmMenuList") {
        fetchApiDELETE({}, url, resolve);
      }
      fetchApiDELETE(postdata, url, resolve);
    });
  }

  static get(payload) {
    let postdata = {};
    let url = "";
    return new Promise(resolve => {
      switch (payload.from) {
        case "moviesInfo":
          url = URL.moviesInfo;
          break;
      }
      // if (payload.from === "userMenuAll" || payload.from === "pjmMenuList") {
      //   fetchApiGET({}, url, resolve);
      // }
      fetchApiGET(postdata, url, resolve);
    });
  }
  static update(payload) {
    let postdata = {};
    let url = "";
    return new Promise(resolve => {
      switch (payload.from) {
        case "moviesInfo":
          url = URL.moviesInfo;
          break;
      }

      if (param.from === "userMenuAll" || param.from === "pjmMenuList") {
        fetchApiPUT({}, url, resolve);
      }
      fetchApiPUT(postdata, url, resolve);
    });
  }
  static search(payload) {
    let postdata = {};
    let url = "";
    return new Promise(resolve => {
      switch (payload.from) {
        case "moviesInfo":
          url = URL.moviesInfo;
          break;
      }

      if (param.from === "userMenuAll" || param.from === "pjmMenuList") {
        fetchApiPOST({}, url, resolve);
      }
      fetchApiPOST(postdata, url, resolve);
    });
  }
}

export default ServiceApi;
