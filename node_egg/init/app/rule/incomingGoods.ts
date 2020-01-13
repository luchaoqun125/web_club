/*
 * @Description: 进货商品
 * @Author: 鲁大师
 * @Date: 2020-01-08 20:04:07
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 15:01:57
 */
import { baseGoods } from './baseGoods';

export const createRule = {
  supplyCompany: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  inPerson: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  payCard: {
    type: 'string',
    allowEmpty: false,
    max: 100,
  },
  payDate: 'dateTime',
  payMoney: 'number',
  status: 'int',
  goodsList: {
    type: 'array',
    itemType: 'object',
    rule: baseGoods,
  },
};
