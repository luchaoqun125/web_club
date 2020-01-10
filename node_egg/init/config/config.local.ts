/*
 * @Description: 开发的配置文件
 * @Author: 鲁大师
 * @Date: 2019-12-11 16:15:29
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 11:17:13
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
      timezone: '+08:00',
      define: {             // model的全局配置
        charset: 'utf8',
        timestamps: true,   // 添加create,update,delete时间戳
        paranoid: true,     // 添加软删除
        freezeTableName: true,  // 防止修改表名为复数
        underscored: false,     // 防止驼峰式字段被默认转为下划线
      },
      dialectOptions: {
        dateStrings: true,
        typeCast(field, next) {
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        },
      },
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
