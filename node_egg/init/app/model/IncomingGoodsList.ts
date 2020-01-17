/*
 * @Description: 进货商品列表
 * @Author: 鲁大师
 * @Date: 2020-01-09 10:23:56
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-13 17:58:03
 */
export default app => {
  const { INTEGER, STRING, FLOAT } = app.Sequelize;

  const IncomingGoodsList = app.model.define('incoming_goods_list', {
    // 商品列表
    // 进货ID
    incomingGoodsId: INTEGER,
    // 入库仓号
    house: INTEGER,
    // 商品id
    goodsId: INTEGER,
    // 商品名称
    goodsName: STRING(100),
    // 生产日期
    manufactureDate: STRING(100),
    // 到期时间
    dueDate: STRING(100),
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
      foreignKey: 'incomingGoodsId',
    });
  };

  return IncomingGoodsList;
};
