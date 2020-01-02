/*
 * @Description: IncomingGoodsService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 16:37:54
 */
import { Service } from 'egg';

export default class IncomingGoodsService extends Service {
  incomingGoodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.incomingGoodsModel = this.ctx.model.IncomingGoods;
  }
  /**
   * 创建入库商品
   * @param {}
   */
  public async create(params) {
    const result = await this.incomingGoodsModel.create(params);
    return result;
  }

  /**
   * 查询入库列表
   */
  public async list() {
    return await this.incomingGoodsModel.Post.findAll({
      attributes: [ 'id' ],
      include: { model: this.incomingGoodsModel },
      where: { status: 'publish' },
      order: 'id desc',
    });
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
