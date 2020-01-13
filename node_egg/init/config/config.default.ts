/*
 * @Description: 默认配置，线上和本地的配置信息
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 14:06:46
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import * as path from 'path';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1576052086807_5902';

  // add your egg config in here
  config.middleware = [ 'swagger', 'errorHandler', 'pagination' ];

  // // 只对前缀的url路径生效
  // config.errorHandler = {
  //   match: '/api',
  // };

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

    // 上传的文件
    multipart: {
      mode: 'file',
    },

    // 校验入参 https://github.com/node-modules/parameter
    validate: {
      convert: true, // 将原始参数转换为特定类型
      // widelyUndefined: true,
    },

    // https://github.com/eggjs/egg-security
    security: {
      // 关闭 csrf
      csrf: {
        enable: false,
      },
      // 跨域白名单
      domainWhiteList: [ 'http://127.0.0.1:7001' ],
    },

    // 允许跨域的方法
    cors: {
      origin: '*',
      allowMethods: 'GET, PUT, POST, DELETE, PATCH',
    },

  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
