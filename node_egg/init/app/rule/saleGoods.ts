/*
 * @Description: 销售的校验
 * @Author: 鲁大师
 * @Date: 2020-01-11 16:45:10
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 16:47:35
 */
import { baseGoods } from './baseGoods';
export const createRule = {
  purchaseCompany: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  salePerson: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  card: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  date: 'dateTime',
  money: 'number',
  status: 'int',
  goodsList: {
    type: 'array',
    itemType: 'object',
    rule: baseGoods,
  },
};
