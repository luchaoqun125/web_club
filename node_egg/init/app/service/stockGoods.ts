/*
 * @Description: 库存的service
 * @Author: 鲁大师
 * @Date: 2020-01-12 20:43:21
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-17 22:31:29
 */
import { Service } from 'egg';

class StockService extends Service {
  stockGoodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.stockGoodsModel = this.app.model.StockGoods;
  }

  // TODO:增加库存
  async add(params) {
    try {
      const { incomingGoodsId, goodsList } = params;
      const values = goodsList.map(item => {
        return { ...item, incomingGoodsId };
      });

      await this.stockGoodsModel.bulkCreate(values);
      return this.ctx.helper.success(this.ctx, null);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, '');
    }
  }

  // TODO: 获取库存列表数据
  async list() {
    const { offset, limit, query } = this.ctx.state.pagination;

    const selectData = {
      where: query,
      limit,
      offset,
    };
    try {
      const list = await this.stockGoodsModel.findAndCountAll(selectData);
      return this.ctx.helper.success(this.ctx, list);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, { rows: [], count: 0 });
    }
  }

}

export default StockService;
