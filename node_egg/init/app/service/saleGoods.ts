/*
 * @Description: 商品销售的服务
 * @Author: 鲁大师
 * @Date: 2019-12-29 15:43:50
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 15:47:57
 */
import { Service } from 'egg';

export default class SaleGoodsService extends Service {
  saleGoodsModel: any;

  constructor(ctx) {
    super(ctx);
  }

  /**
   * 创建销售
   * @param params Object
   */
  async create(params) {
    return {};
  }

  /**
   * 查询销售表格
   * @param params Object
   */
  async list(params) {
    return {};
  }

}
