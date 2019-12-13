/*
 * @Description: 首页接口
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-13 16:58:09
 */
import { Controller } from 'egg';
import { Post, TagsAll, Get, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('首页')
@Prefix('/home')
export default class HomeController extends Controller {

  constructor (ctx) {
    super(ctx);
  }

  @Post('/')
  @Description('请求首页')
  async add({ body: { name, phone, age } }) {
    const result = this.ctx.service.home.add({ name, phone, age });
    return result;
  }

  @Get('/getName')
  @Description('获取name')
  async getName() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.getName('egg');
    return 'hi, egg';
  }
}
