/*
 * @Description: 入库路由
 * @Author: 鲁大师
 * @Date: 2019-12-16 18:53:56
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-09 20:51:44
 */
import { Controller } from 'egg';
import { Post, TagsAll, Description, Prefix } from 'egg-shell-decorators';
import { createRule } from '../rule/incomingGoods';
@TagsAll('入库')
@Prefix('/incoming/goods')
export default class IncomingGoodsController extends Controller {
  incomingGoodsService: any;
  validate: any;

  constructor(ctx) {
    super(ctx);
    this.incomingGoodsService = this.ctx.service.incomingGoods;
    this.validate = this.app.validator.validate;
  }

  @Post('/create')
  @Description('创建入库')
  async create({ body }) {
    try {
      this.validate(createRule, body);
    } catch (error) {
      return error;
    }
    return await this.incomingGoodsService.create(body);
  }

  @Post('/list')
  @Description('查询入库列表')
  async list({ body }) {
    return await this.incomingGoodsService.list(body);
  }

  @Post('/update')
  @Description('更新入库状态')
  async update({ body }) {
    return await this.incomingGoodsService.update(body);
  }

}
