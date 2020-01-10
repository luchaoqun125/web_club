/*
 * @Description: 进货商品列表
 * @Author: 鲁大师
 * @Date: 2020-01-09 10:23:56
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 10:33:27
 */
export default app => {
  const { INTEGER, STRING, DATE, FLOAT } = app.Sequelize;

  const IncomingGoodsList = app.model.define('incoming_goods_list', {
    // 商品列表
    // 商品编号
    goodsId: INTEGER,
    // 商品名称
    goodsName: STRING(100),
    // 生产日期
    manufactureDate: DATE(6),
    // 到期时间
    dueDate: DATE(6),
    // 规格：包，瓶
    type: INTEGER,
    // 数量
    num: INTEGER,
    // 单价
    price: FLOAT,
    // 商品总金额
    money: FLOAT,
  });

  IncomingGoodsList.associate = () => {
    IncomingGoodsList.belongsTo(app.model.IncomingGoods, {
      foreignKey: 'incomingId',
    });
  };

  return IncomingGoodsList;
};
