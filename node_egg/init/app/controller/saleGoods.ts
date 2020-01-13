/*
 * @Description: 销售商品
 * @Author: 鲁大师
 * @Date: 2019-12-29 15:36:48
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-12 20:55:59
 */
import { Controller } from 'egg';
import { Post, TagsAll, Prefix, Description, Get } from 'egg-shell-decorators';

@TagsAll('销售')
@Prefix('/sale/goods')
export default class SaleGoodsController extends Controller {
  saleGoodsService: any;

  constructor(ctx) {
    super(ctx);
    this.saleGoodsService = this.app.model.SaleGoods;
  }

  @Post('/create')
  @Description('创建销售')
  async create({ body }) {
    return await this.saleGoodsService.create(body);
  }

  @Get('/list')
  @Description('查询销售列表')
  async list({ body }) {
    return await this.saleGoodsService.list(body);
  }

}
