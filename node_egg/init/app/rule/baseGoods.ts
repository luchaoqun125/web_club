/*
 * @Description: 商品的校验
 * @Author: 鲁大师
 * @Date: 2020-01-08 20:04:16
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-11 16:48:37
 */
export const baseGoods = {
  // goodsId: 'int',
  goodsName: {
    type: 'string',
    max: 100,
  },
  house: {
    type: 'int',
    required: false,
    max: 100,
  },
  dueDate: 'dateTime',
  manufactureDate: 'dateTime',
  num: 'int',
  type: 'int',
  price: {
    type: 'number',
    min: 0,
  },
  money: {
    type: 'number',
    min: 0,
  },
};
