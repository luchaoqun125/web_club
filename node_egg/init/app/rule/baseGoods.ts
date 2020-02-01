/*
 * @Description: 商品的校验
 * @Author: 鲁大师
 * @Date: 2020-01-08 20:04:16
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-19 13:54:26
 */
export const baseGoods = {
  goodsId: 'int',
  goodsName: {
    type: 'string',
    max: 100,
  },
  house: {
    type: 'string',
    required: false,
    max: 100,
  },
  dueDate: {
    type: 'dateTime',
    required: false,
  },
  manufactureDate: {
    type: 'dateTime',
    required: false,
  },
  num: 'int',
  type: {
    type: 'int',
    required: false,
  },
  price: {
    type: 'number',
    min: 0,
  },
  money: {
    type: 'number',
    min: 0,
  },
};
