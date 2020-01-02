/*
 * @Description: 用户登录
 * @Author: 鲁大师
 * @Date: 2019-12-28 21:40:44
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-29 16:30:04
 */
export default app => {
  const { STRING } = app.Sequelize;

  const UserModel = app.model.define('user', {
    // 用户名
    name: STRING(20),
    // 密码
    password: STRING(20),
  });
  return UserModel;
};
