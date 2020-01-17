/*
 * @Description: IncomingGoodsService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-15 17:42:58
 */
import { Service } from 'egg';

export default class IncomingGoodsService extends Service {
  incomingGoodsModel: any;
  incomingGoodsListModel: any;

  constructor(ctx) {
    super(ctx);
    this.incomingGoodsModel = this.ctx.model.IncomingGoods;
    this.incomingGoodsListModel = this.ctx.model.IncomingGoodsList;
  }
  /**
   * 创建入库商品
   * @param {}
   */
  public async create(params) {
    const { helper } = this.ctx;
    try {
      // 存储进货表
      const incomingData = await this.incomingGoodsModel.create(params, {
        include: [{
          model: this.incomingGoodsListModel,
          as: 'goodsList',
        }],
      });

      // 更新库存表
      await this.ctx.service.stockGoods.add({ incomingGoodsId: incomingData.id, goodsList: params.goodsList });
    } catch (error) {
      return helper.error(this.ctx, error, '报存失败');
    }
    return helper.success(this.ctx, null);
  }

  /**
   * 查询入库列表
   */
  public async list() {
    const { offset, limit, query } = this.ctx.state.pagination;

    try {
      const result = await this.incomingGoodsModel.findAndCountAll({
        where: query,
        limit,
        offset,
        include: [
          {
            model: this.incomingGoodsListModel,
            as: 'goodsList',
          },
        ],
      });
      return this.ctx.helper.success(this.ctx, result);
    } catch (error) {
      return this.ctx.helper.success(this.ctx, { rows: [], count: 0 });
    }
  }
  /**
   * 更新表格
   */
  public async update() {
    return await this.incomingGoodsModel.Post.findAll({
      attributes: [ 'id' ],
      include: { model: this.incomingGoodsModel },
      where: { status: 'publish' },
      order: 'id desc',
    });
  }

}
