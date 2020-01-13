/*
 * @Description: 处理http的异常
 * @Author: 鲁大师
 * @Date: 2020-01-10 15:56:41
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 16:04:06
 */
class HttpExceptions extends Error {

  code: number;
  msg: string;
  httpCode: number;

  constructor(msg = '服务器异常', code= 1, httpCode= 400) {
      super();
      this.code = code;
      this.msg = msg;
      this.httpCode = httpCode;
  }
}

export {
  HttpExceptions,
};
