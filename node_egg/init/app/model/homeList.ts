/*
 * @Description: 家庭成员数据
 * @Author: 鲁大师
 * @Date: 2020-01-09 10:48:59
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 10:32:42
 */
export default app => {
  const { STRING, INTEGER } = app.Sequelize;

  const HomeList = app.model.define('home_list', {
    name: STRING,
    sex: INTEGER,
    age: INTEGER,
    // homeId: INTEGER,
  });

  HomeList.associate = () => {
    HomeList.belongsTo(app.model.Home, {
      foreignKey: 'homeId',
    });
  };

  return HomeList;
};
