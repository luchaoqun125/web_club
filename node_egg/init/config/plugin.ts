/*
 * @Description: 插件配置
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-13 15:57:01
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },

  // https://github.com/eggjs/egg-mysql
  mysql: {
    enable: true,
    package: 'egg-mysql',
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

};

export default plugin;
