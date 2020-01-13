/*
 * @Description: Home的数据库
 * @Author: 鲁大师
 * @Date: 2019-12-16 15:39:03
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 13:59:38
 */
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Home = app.model.define('home', {
    name: STRING(30),
    phone: STRING(32),
    age: INTEGER,
  });

  Home.associate = () => {
    Home.belongsTo(app.model.User, {
      foreignKey: 'userId',
    });
    Home.hasMany(app.model.HomeList, {
      foreignKey: 'homeId',
      as: 'children',
    });
  };
  // https://juejin.im/post/5c2db28de51d453529627ef4
  return Home;
};
