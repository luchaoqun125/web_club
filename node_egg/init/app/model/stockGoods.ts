/*
 * @Description: 库存表结构
 * @Author: 鲁大师
 * @Date: 2020-01-12 20:58:52
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-20 22:33:34
 */
export default app => {
  const { INTEGER, STRING, FLOAT } = app.Sequelize;

  const StockGoodsModel = app.model.define('stock_goods', {
    // 商品列表
    // 进货ID
    incomingGoodsId: INTEGER,
    // 商品ID
    goodsId: INTEGER,
    // 入库仓号
    house: STRING(100),
    // 商品名称
    goodsName: STRING(100),
    // 生产日期
    manufactureDate: STRING(100),
    // 到期时间
    dueDate: STRING(100),
    // 规格：包，瓶
    type: INTEGER,
    // 规格：包，瓶
    typeStr: STRING(100),
    // 数量
    num: INTEGER,
    // 单价
    price: FLOAT,
    // 商品总金额
    money: FLOAT,
  });

  return StockGoodsModel;
};
