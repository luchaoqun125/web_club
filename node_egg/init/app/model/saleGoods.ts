/*
 * @Description: 入库商品数据
 * @Author: 鲁大师
 * @Date: 2019-12-16 19:04:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-12 21:30:39
 */
export default app => {
  const { STRING, INTEGER, FLOAT } = app.Sequelize;

  const SaleGoods = app.model.define('sale_goods', {
    // 购买单位
    purchaseCompany: STRING(100),
    // 销售人
    salePerson: STRING(100),
    // 付款账号
    card: STRING(100),
    // 付款日期
    date: STRING(100),
    // 收款金额
    money: FLOAT,
    // 销售状态，1已发货，0未发货
    status: INTEGER,
  });

  SaleGoods.associate = () => {
    SaleGoods.hasMany(app.model.SaleGoodsList, {
      foreignKey: 'saleGoodsId',
      as: 'goodsList',
    });
  };

  return SaleGoods;
};
