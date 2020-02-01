/*
 * @Description: 库存的service
 * @Author: 鲁大师
 * @Date: 2020-01-12 20:43:21
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-20 22:34:04
 */
import { Service } from 'egg';

class StockService extends Service {
  stockGoodsModel: any;

  constructor(ctx) {
    super(ctx);
    this.stockGoodsModel = this.app.model.StockGoods;
  }

  updateItem(nowValue, updateValue) {
    return {
      ...nowValue,
      num: nowValue.num + updateValue.num,
      money: nowValue.money + updateValue.money,
    };
  }

  subItem (nowValue, updateValue) {
    return {
      ...nowValue,
      num: nowValue.num - updateValue.num,
      money: nowValue.money - updateValue.num * nowValue.price,
    };
  }

  // TODO: 减去库存
  subStock(params) {
    try {
      const { goodsList } = params;
      goodsList.map(item => {
        this.stockGoodsModel.findOne({
          where: { goodsId: item.goodsId },
        }).then(project => {
          project.update(this.subItem(project, item));
        });
      });
    } catch (error) {
      return this.ctx.helper.error(this.ctx);
    }
  }

  // TODO:增加库存
  async add(params) {
    try {
      const { incomingGoodsId, house, goodsList } = params;
      goodsList.map(item => {
        const { goodsId } = item;
        const newItem = { ...item, incomingGoodsId, house };
        this.stockGoodsModel.findOrCreate({
          where: { goodsId },
          defaults: newItem,
        }).spread((stock, create) => {
          if (create === false) {
            stock.update(this.updateItem(stock, newItem));
          }
        });
      });
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

  // 获取所有列表
  async all() {
    try {
      const list = await this.stockGoodsModel.findAll();
      return this.ctx.helper.success(this.ctx, list);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, null);
    }
  }

}

export default StockService;
