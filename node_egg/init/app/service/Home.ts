/*
 * @Description: HomeService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 11:31:52
 */
import { Service } from 'egg';

export default class HomeService extends Service {
  homeModel: any;
  homeListModel: any;

  constructor(ctx) {
    super(ctx);
    this.homeModel = this.ctx.model.Home;
    this.homeListModel = this.ctx.model.HomeList;
  }
  /**
   * @param name - your name
   */
  public async add(params) {

    try {
      const { name, phone, age, children = [] } = params;

      // bulkCreate批量创建，create创建一条数据
      const homeDB = await this.homeModel.create({ name, phone, age, children }, {
        include: [{
          model: this.homeListModel,
          as: 'children',
        }],
      });
      return homeDB;
    } catch (error) {
      this.ctx.logger.error(error);
      return error;
    }
  }

  /**
   * @return， 查询列表
   */
  async list(params) {
    const { pageSize, current, ...query } = params;
    const selectData = {
      where: query,
      limit: Number(pageSize) || 20,
      offset: (current - 1) * pageSize,
      include: [
        {
          model: this.homeListModel,
          as: 'children',
        },
      ],
    };

    let list: any, total: any;
    try {
      list = await this.homeModel.findAll(selectData) || [];
      total = (await this.homeModel.findAll({ where: query, include: [
        {
          model: this.homeListModel,
          as: 'children',
        },
      ]})).length;
    } catch (error) {
      this.logger.error(error);
    }

    return {
      list,
      total,
    };
  }
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getName(name: string) {
    return `hi, ${name}`;
  }
}
