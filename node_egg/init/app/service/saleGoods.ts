/*
 * @Description: 商品销售的服务
 * @Author: 鲁大师
 * @Date: 2019-12-29 15:43:50
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-19 17:03:41
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
      const result = await this.saleGoodsModel.create(params , {
        include: [{
          model: this.app.model.SaleGoodsList,
          as: 'goodsList',
        }],
      });
      await this.ctx.service.stockGoods.subStock(result);
      return this.ctx.helper.success(this.ctx);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, error, '保存失败');
    }
  }

  /**
   * 查询销售表格
   */
  async list() {
    const { offset, limit, query } = this.ctx.state.pagination;
    try {
      const result = await this.saleGoodsModel.findAndCountAll({
        where: query,
        limit,
        offset,
        include: [
          {
            model: this.app.model.SaleGoodsList,
            as: 'goodsList',
          },
        ],
      });
      return this.ctx.helper.success(this.ctx, result);
    } catch (error) {
      return this.ctx.helper.success(this.ctx, { rows: [], count: 0 });
    }
  }

}
