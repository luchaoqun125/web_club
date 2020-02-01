/*
 * @Description: 进货商品列表
 * @Author: 鲁大师
 * @Date: 2020-01-09 10:23:56
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-21 07:59:01
 */
export default app => {
  const { INTEGER, STRING, FLOAT } = app.Sequelize;

  const SaleGoodsList = app.model.define('sale_goods_list', {
    // 商品列表
    // 出货订单ID
    saleGoodsId: INTEGER,
    // 进货订单号
    incomingGoodsId: INTEGER,
    // 商品id
    goodsId: INTEGER,
    // 商品名称
    goodsName: STRING,
    // 销售仓库
    house: STRING(100),
    // 规格：包，瓶
    type: INTEGER,
    // 数量
    num: INTEGER,
    // 单价
    price: FLOAT,
    // 商品总金额
    money: FLOAT,
  });

  SaleGoodsList.associate = () => {
    SaleGoodsList.belongsTo(app.model.SaleGoods, {
      foreignKey: 'saleGoodsId',
    });
  };

  return SaleGoodsList;
};
