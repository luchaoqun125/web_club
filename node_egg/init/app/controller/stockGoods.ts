/*
 * @Description: 库存
 * @Author: 鲁大师
 * @Date: 2019-12-29 16:54:15
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-07 17:19:34
 */
import { Controller } from 'egg';
import { Post, TagsAll, Prefix, Description } from 'egg-shell-decorators';

@TagsAll('库存')
@Prefix('/stock/goods')
export default class StockController extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  @Post('/list')
  @Description('库存列表')
  async list ({ body }) {
    console.log(body);
    return await {};
  }

  @Post('/update')
  @Description('更改库存数量')
  async update({ body }) {
    console.log(body);
    return await {};
  }
}
