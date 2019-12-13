/*
 * @Description: HomeService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-13 17:34:16
 */
import { Service } from 'egg';

export default class HomeService extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async add(params) {
    const result = await this.app.mysql.insert('users', params);
    return result;
  }
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getName(name: string) {
    return `hi, ${name}`;
  }
}
