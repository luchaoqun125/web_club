/*
 * @Description: 首页接口
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-08 17:16:39
 */
import { Controller } from 'egg';
import { Post, TagsAll, Get, Description, Prefix } from 'egg-shell-decorators';
import { addRules } from '../rule/home';

@TagsAll('首页')
@Prefix('/home')
export default class HomeController extends Controller {
  homeService: any;
  validator: any;

  constructor (ctx) {
    super(ctx);
    this.homeService = this.ctx.service.home;
    this.validator = this.app.validator;
  }

  @Post('/')
  @Description('请求首页')
  async add({ body }) {
    const errors = this.validator.validate(addRules, body);
    if (errors) {
      return errors;
    }
    const result = await this.homeService.add(body);
    return result;
  }

  @Post('/list')
  @Description('获取所有列表')
  async list({ body }) {
    return await this.homeService.list(body);
  }

  @Get('/getName')
  @Description('获取name')
  async getName() {
    const { ctx } = this;
    ctx.body = await this.homeService.getName('egg');
    return 'hi, egg';
  }
}