/*
 * @Description: 商品新建，更新，列表
 * @Author: 鲁大师
 * @Date: 2020-01-13 14:46:13
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-19 14:06:04
 */
import { Controller } from 'egg';
import { Post, Description, TagsAll, Prefix, Get } from 'egg-shell-decorators';
import { goodsRule } from '../rule/goods';

@TagsAll('销售')
@Prefix('/goods')
class Goods extends Controller {

  constructor(ctx) {
    super(ctx);
  }

  @Post('/add')
  @Description('新增商品')
  async add({ body }) {
    const error = this.app.validator.validate(goodsRule, body);
    if (error) {
      return this.ctx.helper.error(this.ctx, null, '参数异常');
    }
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

  @Get('/all')
  @Description('查询列表')
  async all() {
    return this.ctx.service.goods.all();
  }

}

export default Goods;
