/*
 * @Description: 登录和退出的服务
 * @Author: 鲁大师
 * @Date: 2019-12-18 10:42:10
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 16:33:06
 */
import { Service } from 'egg';

export default class UserService extends Service {
  userModal: any;

  constructor(ctx) {
    super(ctx);
    this.userModal = this.ctx.model.User;
  }

  /**
   * 登录操作
   * @param body
   * @return 返回结果
   */
  async login(body) {
    return await this.userModal.create(body);
  }

  // 退出操作
  async out() {
    return {};
  }

  /**
   * 获取用户信息
   * @return {}
   */
  async info() {
    return {};
  }
}
