/*
 * @Description: goons的数据库
 * @Author: 鲁大师
 * @Date: 2020-01-13 14:56:51
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-14 18:34:31
 */
export default app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Goods = app.model.define('goods', {
    // 名称
    name: STRING,
    // 类型
    type: INTEGER,
    // 类型名称
    typeStr: STRING,
  });

  return Goods;
};
