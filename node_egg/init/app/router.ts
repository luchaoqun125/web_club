/*
 * @Description: 入口文件配置
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-11 20:35:22
 */
import { Application } from 'egg';
import { EggShell } from 'egg-shell-decorators';

export default (app: Application) => {
  // const { controller, router } = app;
  EggShell(app, {
    // 全局添加路由解析
    prefix: '/api',
    // QuickStart 模式会自动处理响应体
    quickStart: true,
    // swagger的配置
    swaggerOpt: {
      open: true,
      title: 'swagger的title', // 对应 swagger-ui 的 title
      version: '1.0.0', // 对应 swagger-ui 的 version
      host: '127.0.0.1', // 对应 swagger-ui 的 host
      port: 7001, // 如有填的话 host += ':' port
      schemes: [ 'http' ],
      paths: {
        outPath: '/docs/swagger.json', // 输出 swagger-ui 文档json的文件路径
        definitionPath: '/docs/definitions', // definitions 模型的路径（下面会有讲解）
        swaggerPath: '/docs/swagger', // swagger-ui 路径映射（下面会有讲解）
      },
      // tokenOpt: {
      //   default: 'manager',
      //   tokens: {
      //     manager: '123',
      //     user: '321',
      //   },
      // },
    },
  });
  // router.get('/', controller.home.index);
};
