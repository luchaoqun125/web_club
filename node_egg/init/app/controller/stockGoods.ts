/*
 * @Description: 库存
 * @Author: 鲁大师
 * @Date: 2019-12-29 16:54:15
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-17 22:32:47
 */
import { Controller } from 'egg';
import { TagsAll, Prefix, Description, Get } from 'egg-shell-decorators';

@TagsAll('库存')
@Prefix('/stock/goods')
export default class StockController extends Controller {
  stockService: any;

  constructor(ctx) {
    super(ctx);
    this.stockService = this.ctx.service.stockGoods;
  }

  @Get('/list')
  @Description('库存列表')
  async list ({ body }) {
    return await this.stockService.list(body);
  }

}
