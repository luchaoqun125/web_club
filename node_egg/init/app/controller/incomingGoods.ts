/*
 * @Description: 入库路由
 * @Author: 鲁大师
 * @Date: 2019-12-16 18:53:56
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-16 19:17:33
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

}
