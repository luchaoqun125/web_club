/*
 * @Description: 用户登录，退出
 * @Author: 鲁大师
 * @Date: 2019-12-28 21:15:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 16:33:15
 */
import { Controller } from 'egg';
import { Post, TagsAll, Get, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('登录和退出')
@Prefix('/user')
export default class UserController extends Controller {
  userService: any;

  constructor(ctx) {
    super(ctx);
    this.userService = this.ctx.service.user;
  }

  @Post('/login')
  @Description('登录')
  async login(body) {
    return await this.userService.login(body);
  }

  @Get('/out')
  @Description('退出')
  async out() {
    return await this.userService.out();
  }

  @Get('/info')
  @Description('获取用户信息')
  async info() {
    return await this.userService.info();
  }

}
