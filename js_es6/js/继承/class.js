/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-12-15 14:08:41
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-15 14:20:58
 */
// /定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.toString = this.toString.bind(this)
  }

  toString(name) {
    return '(' + this.x + ', ' + this.y + name + ')';
  }

}

var point = new Point(2, 3);
// point.toString('demo1') // (2, 3)
console.log(point.toString('demo1'))
