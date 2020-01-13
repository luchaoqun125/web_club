/*
 * @Description: 入库商品数据
 * @Author: 鲁大师
 * @Date: 2019-12-16 19:04:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-12 21:30:10
 */
export default app => {
  const { STRING, INTEGER, FLOAT } = app.Sequelize;

  const IncomingGoods = app.model.define('incoming_goods', {
    // 入库id
    // id: INTEGER,
    // 供货单位
    supplyCompany: STRING(100),
    // 经办人
    inPerson: STRING(100),
    // 付款账号
    payCard: STRING(100),
    // 付款日期
    payDate: STRING(100),
    // 付款金额
    payMoney: FLOAT,
    // 状态: 0未入库，1已入库，
    status: INTEGER,
  });

  IncomingGoods.associate = () => {
    IncomingGoods.hasMany(app.model.IncomingGoodsList, {
      foreignKey: 'incomingGoodsId',
      as: 'goodsList',
    });
  };

  return IncomingGoods;
};
