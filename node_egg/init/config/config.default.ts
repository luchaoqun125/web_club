/*
 * @Description: 默认配置，线上和本地的配置信息
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-12 10:18:07
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path'

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576052086807_5902';

  // add your egg config in here
  config.middleware = [ 'swagger' ];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,

    // https://github.com/eggjs/egg-static
    static: {
      dir: [
        {
          prefix: '/public/',
          dir: path.join(appInfo.baseDir, 'app/public'),
        },
        {
          prefix: '/docs/',
          dir: path.join(appInfo.baseDir, 'docs'),
        },
      ],
    },

    // https://github.com/TheOne1006/egg-swagger
    swagger: {
      enable: true,
      mountPath: '/docs', // swagger-ui  address  <domain>/test-mount
      swaggerFilePath: '/docs/swagger.json',
      enableGoogleFont: false,
    },
    
    // https://github.com/eggjs/egg-security
    security: {
      xframe: {
        enable: false,
      },
    },

    // https://github.com/eggjs/egg-mysql
    // mysql: {
    //   // database configuration
    //   client: {
    //     // host
    //     host: 'mysql.com',
    //     // port
    //     port: '3306',
    //     // username
    //     user: 'test_user',
    //     // password
    //     password: 'test_password',
    //     // database
    //     database: 'test',
    //   },
    //   // load into app, default is open
    //   app: true,
    //   // load into agent, default is close
    //   agent: false,
    // }
  }

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
