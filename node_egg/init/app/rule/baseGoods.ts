/*
 * @Description: 商品的校验
 * @Author: 鲁大师
 * @Date: 2020-01-08 20:04:16
 * @LastEditors  : 鲁大师
 * @LastEditTime : 2020-01-09 20:48:18
 */
export const baseGoods = {
  goodsId: 'int',
  goodsName: {
    type: 'string',
    max: 100,
  },
  dueDate: 'date',
  manufactureDate: 'date',
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
