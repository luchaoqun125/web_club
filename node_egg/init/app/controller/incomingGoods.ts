/*
 * @Description: 入库路由
 * @Author: 鲁大师
 * @Date: 2019-12-16 18:53:56
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-17 21:17:11
 */
import { Controller } from 'egg';
import { Post, TagsAll, Description, Prefix } from 'egg-shell-decorators';

@TagsAll('入库')
@Prefix('/incoming/goods')
export default class IncomingGoodsController extends Controller {
  incomingGoodsService: any;

  constructor(ctx) {
    super(ctx);
    this.incomingGoodsService = this.ctx.service.incomingGoods;
  }

  @Post('/create')
  @Description('创建入库')
  async create({ body }) {
    return await this.incomingGoodsService.create(body);
  }

  @Post('/list')
  @Description('查询入库列表')
  async list({ body }) {
    return await this.incomingGoodsService.list(body);
  }

}
