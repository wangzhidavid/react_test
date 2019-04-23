import "whatwg-fetch";
import * as StatusCode from "../constants/StatusCode";

let fetchApiPOST = function(postData, url, resolve, obj) {
  let options = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  };

  fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.rtn_code == StatusCode.XAHC_NOT_LOGIN) {
      }
      // else if (data.rtn_code == StatusCode.XAHC_DATA_NOTEXIST) {
      //   message.info("数据不存在");
      // }
      else {
        resolve({ res: data, param: obj });
      }
    });
};
let fetchApiPUT = function(postData, url, resolve, obj) {
  let options = {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(postData)
  };
  fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.rtn_code == StatusCode.XAHC_NOT_LOGIN) {
      }
      //  else if (data.rtn_code == StatusCode.XAHC_DATA_NOTEXIST) {
      //   message.info("数据不存在");
      // }
      else {
        resolve({ res: data, param: obj });
      }
    });
};
let fetchApiDELETE = function(postData, url, resolve, obj) {
  let options = {
    method: "DELETE",
    credentials: "include",
    body: JSON.stringify(postData)
  };
  fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.rtn_code == StatusCode.XAHC_NOT_LOGIN) {
      } else if (data.rtn_code == StatusCode.XAHC_DATA_NOTEXIST) {
        message.info("数据不存在");
      } else {
        resolve({ res: data, param: obj });
      }
    });
};
let fetchApiGET = function(postData, url, resolve, obj) {
  let options = {
    method: "GET",
    credentials: "include"
  };
  // if (url.indexOf("?") > -1) {
  //   url = url + "&time=" + new Date().getTime();
  // } else {
  //   url = url + "?time=" + new Date().getTime();
  // }
  fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      resolve({ res: data, param: obj });
    });
};
let fetchApiFORM = function(postData, url, resolve, obj) {
  let options = {
    method: "POST",
    credentials: "include",
    body: postData,
    headers: {
      processData: false, //用于对data参数进行序列化处理，这里必须false；如果是true，就会将FormData转换为String类型
      contentType: false // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  };
  fetch(url, options)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      if (data.rtn_code == StatusCode.XAHC_NOT_LOGIN) {
      } else if (data.rtn_code == StatusCode.XAHC_DATA_NOTEXIST) {
        message.info("fetchApiForm-->error");
      } else {
        resolve({ res: data, param: obj });
      }
    });
};

export { fetchApiPOST, fetchApiPUT, fetchApiDELETE, fetchApiGET, fetchApiFORM };
