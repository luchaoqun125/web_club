/*
 * @Description: 开发的配置文件
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-16 14:08:21
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {

    // https://github.com/eggjs/egg-sequelize
    sequelize : {
      dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
      database: 'eggtest',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12QWqw..',
      // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
      // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
      // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
      // more sequelize options
    },

    // https://github.com/eggjs/egg-security
    security: {
      xframe: {
        enable: false,
      },
      csrf: {
        enable: false,
        ignoreJSON: true,
      },
      domainWhiteList: [ 'http://localhost:7001', 'http://127.0.0.1:7001' ],
    },
    // jsonp: {
    //   csrf: true,
    //   whiteList: [ 'http://127.0.0.1:7001' ],
    // },

  };
  return config;
};
