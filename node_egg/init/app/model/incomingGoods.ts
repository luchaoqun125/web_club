/*
 * @Description: 入库商品数据
 * @Author: 鲁大师
 * @Date: 2019-12-16 19:04:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 10:32:10
 */
export default app => {
  const { STRING, INTEGER, DATE, FLOAT } = app.Sequelize;

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
    payDate: DATE(6),
    // 付款金额
    payMoney: FLOAT,
    // 入库仓号
    house: INTEGER,
    // 状态
    status: INTEGER,
  });

  IncomingGoods.associate = () => {
    IncomingGoods.hasMany(app.model.IncomingGoodsList, {
      foreignKey: 'incomingId',
      as: 'children',
    });
  };

  return IncomingGoods;
};
