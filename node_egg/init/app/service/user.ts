/*
 * @Description: 登录和退出的服务
 * @Author: 鲁大师
 * @Date: 2019-12-18 10:42:10
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 13:47:22
 */
import { Service } from 'egg';

export default class UserService extends Service {
  userModel: any;

  constructor(ctx) {
    super(ctx);
    this.userModel = this.ctx.model.User;
  }

  /**
   * 登录操作
   * @param body
   * @return 返回token,和userId
   */
  async login(params) {
    const { name } = params;
    const loginResult = await this.userModel.findOne({
      where: { name },
    });

    if (!loginResult) {
      return this.ctx.helper.error(this.ctx, '暂无用户信息');
    }

    return loginResult;
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
