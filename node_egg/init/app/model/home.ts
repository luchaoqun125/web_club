/*
 * @Description: user的数据库
 * @Author: 鲁大师
 * @Date: 2019-12-16 15:39:03
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-16 19:05:46
 */
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    login: STRING,
    name: STRING(30),
    phone: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
