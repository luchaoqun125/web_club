/*
 * @Description: 创建用户的校验
 * @Author: 鲁大师
 * @Date: 2020-01-10 11:40:16
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-10 18:00:00
 */

// 登录校验
export const loginRule = {
  name: {
    type: 'string',
    min: 11,
    max: 20,
  },
  password: {
    type: 'password',
    min: 6,
    max: 20,
  },
};

// 注册校验
export const registerRule = {
  ...loginRule,
  registerCode: {
    type: 'int',
    max: 11,
  },
};
