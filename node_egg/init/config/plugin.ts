/*
 * @Description: 插件配置
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-12 10:17:57
 */
import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql',
  // },

  // https://github.com/TheOne1006/egg-swagger
  swagger: {
    enable: true,
    package: 'egg-swagger',
  },

};

export default plugin;
