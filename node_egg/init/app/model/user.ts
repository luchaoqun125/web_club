/*
 * @Description: 用户登录
 * @Author: 鲁大师
 * @Date: 2019-12-28 21:40:44
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 11:35:32
 */
export default app => {
  const { STRING } = app.Sequelize;

  const User = app.model.define('user', {
    // 用户名
    name: STRING(20),
    // 密码
    password: STRING(20),
  });

  User.associate = () => {
    User.hasMany(app.model.Home);
  };

  return User;
};
