/*
 * @Description: 入库路由
 * @Author: 鲁大师
 * @Date: 2019-12-16 18:53:56
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-15 17:38:50
 */
import { Controller } from 'egg';
import { Post, Get, TagsAll, Description, Prefix } from 'egg-shell-decorators';
import { createRule } from '../rule/incomingGoods';
@TagsAll('入库')
@Prefix('/incoming/goods')
export default class IncomingGoodsController extends Controller {
  incomingGoodsService: any;
  validator: any;

  constructor(ctx) {
    super(ctx);
    this.incomingGoodsService = this.ctx.service.incomingGoods;
    this.validator = this.app.validator;
  }

  @Post('/create')
  @Description('创建入库')
  async create({ body }) {
    try {
      this.validator.validate(createRule, body);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, error, '参数校验失败');
    }
    return await this.incomingGoodsService.create(body);
  }

  @Get('/list')
  @Description('查询入库列表')
  async list() {
    return await this.incomingGoodsService.list();
  }

  @Post('/update')
  @Description('更新入库状态')
  async update({ body }) {
    return await this.incomingGoodsService.update(body);
  }

}
