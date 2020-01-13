/*
 * @Description: 商品新建，更新，列表
 * @Author: 鲁大师
 * @Date: 2020-01-13 14:46:13
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-13 15:35:25
 */
import { Controller } from 'egg';
import { Post, Description, TagsAll, Prefix, Get } from 'egg-shell-decorators';

@TagsAll('销售')
@Prefix('/goods')
class Goods extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  @Post('/add')
  @Description('新增商品')
  async add({ body }) {
    return this.ctx.service.goods.add(body);
  }

  @Post('/update')
  @Description('更新商品')
  async update({ body }) {
    return this.ctx.service.goods.update(body);
  }

  @Get('/list')
  @Description('查询列表')
  async list() {
    return this.ctx.service.goods.list();
  }

}

export default Goods;
