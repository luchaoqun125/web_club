/*
 * @Description: 开发的配置文件
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-13 17:27:18
 */
import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {

    // https://github.com/eggjs/egg-mysql
    mysql: {
      // database configuration
      client: {
        // host
        host: 'localhost',
        // port
        port: '3306',
        // username
        user: 'root',
        // password
        password: '12QWqw..',
        // database
        database: 'eggtest',
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
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
