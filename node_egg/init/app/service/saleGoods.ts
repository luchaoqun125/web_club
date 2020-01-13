/*
 * @Description: 商品销售的服务
 * @Author: 鲁大师
 * @Date: 2019-12-29 15:43:50
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-12 20:46:28
 */
import { Service } from 'egg';

export default class SaleGoodsService extends Service {
  saleGoodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.saleGoodsModel = this.app.model.SaleGoods;
  }

  /**
   * 创建销售
   * @param params Object
   */
  async create(params) {
    try {
      await this.saleGoodsModel.create(params , {
        include: [{
          model: this.app.model.SaleGoodsList,
          as: 'goodsList',
        }],
      });
      return this.ctx.helper.success(this.ctx);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, error, '保存失败');
    }
  }

  /**
   * 查询销售表格
   * @param params Object
   */
  async list(params) {
    console.log(params);
    return {};
  }

}
