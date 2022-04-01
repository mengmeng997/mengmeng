// request.ts
import axios from "./index";
import qs from "qs";

export class Request {
  /**
   * get方法
   * @param {string} url 路径
   * @param {object} params 参数
   */
  static get = (url: string, params?: any) => {
    console.log(666)
    return this.httpClient({
      method:"get",
      url:url,
      data:params
    })
  }

  static post = (url: string, params?: any) => {
    return this.httpClient({
      method:"post",
      url:url,
      data:params
    })
  }
  
  static put = (url: string, params?: any) => {
    return this.httpClient({
      method:"put",
      url:url,
      data:params
    })
  }

  static delete = (url: string, params?: any) => {
    return this.httpClient({
      method:"delete",
      url:url,
      data:params
    })
  }

  static httpClient = (params?:any) =>{
    return  new Promise((resolve, reject) => {
      axios(params).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }
}