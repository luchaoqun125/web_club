/*
 * @Description: 插件配置
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2019-12-28 22:08:19
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // https://github.com/eggjs/egg-sequelize
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },

  // https://github.com/TheOne1006/egg-swagger
  swagger: {
    enable: true,
    package: 'egg-swagger',
  },

  // https://github.com/eggjs/egg-validate
  validate: {
    enable: true,
    package: 'egg-validate',
  },

  // 稍后处理
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },

  // 稍后处理
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },

};

export default plugin;
