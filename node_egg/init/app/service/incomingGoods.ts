/*
 * @Description: IncomingGoodsService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-16 19:02:35
 */
import { Service } from 'egg';

export default class IncomingGoodsService extends Service {
  IncomingGoodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.IncomingGoodsModel = this.ctx.model.IncomingGoods;
  }
  /**
   * sayHi to you
   * @param name - your name
   */
  public async create(params) {
    const result = await this.IncomingGoodsModel.create(params);
    return result;
  }
}
