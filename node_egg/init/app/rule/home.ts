/*
 * @Description: home的校验规则
 * @Author: 鲁大师
 * @Date: 2020-01-07 19:18:21
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-09 14:40:07
 */

export const addRules = {
  name: 'string',
  phone: 'string',
  age: {
    type: 'int',
    min: 1,
    max: 99,
  },
  children: {
    type: 'array',
    itemType: 'object',
    rule: {
      name: 'string',
      sex: 'int',
      age: 'int',
    },
  },
};
