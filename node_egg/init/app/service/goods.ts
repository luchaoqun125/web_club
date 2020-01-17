/*
 * @Description: 商品功能
 * @Author: 鲁大师
 * @Date: 2020-01-13 14:50:36
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-14 21:20:14
 */
import { Service } from 'egg';

class GoodsService extends Service {
  goodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.goodsModel = this.app.model.Goods;
  }

  // 商品新增逻辑
  async add(params) {
    const { helper } = this.ctx;
    try {
      const findGoods = await this.goodsModel.findAll({
        where: params,
      });

      if (findGoods && findGoods.length !== 0) {
        return helper.error(this.ctx, null, '该商品名称已存在');
      }

      await this.goodsModel.create(params);
      return helper.success(this.ctx);
    } catch (error) {
      return helper.error(this.ctx, error);
    }
  }

  // 商品更新
  async update(params) {
    const { helper } = this.ctx;
    const { id, ...values } = params;
    try {
      await this.goodsModel.update(values, {
        where: { id },
      });
      return helper.success(this.ctx);
    } catch (error) {
      return helper.error(this.ctx, error);
    }
  }

  // 商品列表
  async list() {
    const { offset, limit, query } = this.ctx.state.pagination;

    const selectData = {
      where: query,
      limit,
      offset,
    };

    try {
      const result = await this.goodsModel.findAndCountAll(selectData);
      return this.ctx.helper.success(this.ctx, result);
    } catch (error) {
      return this.ctx.helper.error(this.ctx);
    }
  }
}

export default GoodsService;
