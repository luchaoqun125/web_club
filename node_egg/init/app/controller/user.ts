/*
 * @Description: 用户登录，退出
 * @Author: 鲁大师
 * @Date: 2019-12-28 21:15:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 17:37:08
 */
import { Controller } from 'egg';
import { Post, TagsAll, Get, Description, Prefix } from 'egg-shell-decorators';
import { loginRule } from '../rule/user';

@TagsAll('登录和退出')
@Prefix('/user')
export default class UserController extends Controller {
  userService: any;
  validator: any;

  constructor(ctx) {
    super(ctx);
    this.userService = this.ctx.service.user;
    this.validator = this.app.validator;
  }

  @Post('/login')
  @Description('登录')
  async login({ body }) {
    const error = this.validator.validate(loginRule, body);
    if (error) {
      return error;
    }
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

  @Post('/register')
  @Description('注册')
  async register({ body }) {
    return await this.userService.register(body);
  }
}
