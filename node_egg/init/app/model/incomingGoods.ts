/*
 * @Description: 入库商品数据
 * @Author: 鲁大师
 * @Date: 2019-12-16 19:04:58
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 16:26:24
 */
export default app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const IncomingGoods = app.model.define('incoming_goods', {
    // 入库id
    incoming_id: INTEGER,
    // 供货单位
    supply_company: STRING(100),
    // 经办人
    in_person: STRING(100),
    // 付款账号
    pay_card: INTEGER,
    // 付款日期
    pay_date: DATE,
    // 入库仓号
    house: INTEGER,
    // 状态
    status: INTEGER,
    // 商品编号
    goods_id: INTEGER,
    // 商品名称
    goods_name: STRING(100),
    // 生成日期
    manufacture_date: DATE,
    // 到期时间
    due_date: DATE,
    // 规格：包，瓶
    type: INTEGER,
    // 数量
    num: INTEGER,
    // 单价
    price: INTEGER,
    // 商品总金额
    money: INTEGER,
  });

  return IncomingGoods;
};
