import axios from "axios";
import store from "@/store"
import router from "@/router"
// console.log(store);

import { Message } from "element-ui";
axios.defaults.withCredentials = true; //配置允许跨域携带cookie
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
const HttpError = {
  400: "请求错误",
  401: "未授权，请登录",
  403: "拒绝访问",
  404: "求地址出错",
  408: "请求超时",
  500: "服务器开个小差，请稍后再试",
  501: "服务器开个小差，请稍后再试",
  502: "服务器开个小差，请稍后再试",
  503: "服务器开个小差，请稍后再试",
  504: "服务器开个小差，请稍后再试",
  505: "HTTP版本不受支持"
};

axios.interceptors.request.use(
  config => {
    config.headers= {
      "Content-Type": "application/json;charset=UTF-8",
      //"authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImV4cCI6MjEyMjg4MjUzMSwiaWF0IjoxNjA0NDgyNTMxfQ.rxrOPxNMNQS7CMmu5nEbKSLgrqn0e7hrF0bBi2ph7_4",

    };
    if(store.state.token){
      let token="Bearer " + store.state.token;
      config.headers.authorization = token;
    } 
    config.crossDomain = true;  //配置跨域状态
    config.timeout = 200000;   //配置超时时间
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use(
  res => {
	  // console.log(res);
    // console.log("返回代码:"+ res);
    // alert("返回代码："+ JSON.stringify(res));
    // try {
    //   // TODO: set response pre-judge-handler
    // } catch (e) {
    //   console.info(
    //     `错误名称: ${e.name}\n错误描述: ${e.message}\n错误堆栈: ${e.stack}`
    //   );
    // }
    return res;
  },

  error => {
	  
	  // console.log( error);
  //   if ( error.response.status == "401") {
		// router.replace({
		// path: '/login',
		// query: { redirect: router.currentRoute.fullPath }
		// });

  //     // let url = err.response.data.loginUrl;
  //     // let localUrl = escape(escape("#/" + location.href.split("/#/")[1]));
  //     // window.location.href = url + localUrl;
  //   };
  //   if ( error.response.status != "200" ||  error.response.status != "401") {
		// console.log( error);
  //   };

    return Promise.reject(error);
  }
);


/**
 * @func axios的二次封装
 * @param method-请求方法，url-接口地址，data-请求参数
 */
const request = (url, data = {}, method = "GET") => {
  let params;
  if (method.toUpperCase() === "GET") {
    params = "params";
  } else {
    params = "data";
  }
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      [params]: data
    })
      .then(res => {
        resolve(res);
      })
      .catch(e => {
		  console.log(e);
		  if(e.response.data.code != 200){
			  if(e.response.data.code == 401 ){
				 router.replace({
				   path: '/login',
				   query: { redirect: router.currentRoute.fullPath }
				   }); 
			  }else{
				 Message({type: "error", message:e.response.data.message }); 
			  }
		  }
		
        reject(e);
      });
  });
};

export default request;
