/*
 * @Description: app
 * @Author: 鲁大师
 * @Date: 2019-12-16 15:55:00
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-21 08:00:31
 */
module.exports = app => {
  if (app.config.env === 'local' || app.config.env === 'unittest') {
    app.beforeStart(async () => {
      await app.model.sync({ force: false });
    });
  }
};
