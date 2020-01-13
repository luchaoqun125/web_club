/*
 * @Description: HomeService Service
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 14:22:59
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
  async list() {
    const { offset, limit, query } = this.ctx.state.pagination;

    const selectData = {
      where: query,
      limit,
      offset,
      include: [
        {
          model: this.homeListModel,
          as: 'children',
        },
      ],
    };

    let list = [];
    try {
      list = await this.homeModel.findAndCountAll(selectData);
    } catch (error) {
      return this.ctx.helper.error(this.ctx, error, '参数异常');
    }

    return this.ctx.helper.success(this.ctx, list);
  }
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getName(name: string) {
    return `hi, ${name}`;
  }
}
