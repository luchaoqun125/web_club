/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:26:35
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-18 20:15:15
 */
const path = require('path')

const resolvePath = (pathUrl) => {
  return path.resolve(__dirname, pathUrl)
}

module.exports = {
  webpackEntry: resolvePath('../src/index'),
  src:resolvePath('../src'),
  dist: resolvePath('../dist'),
  publicIndex: resolvePath('../public/index.html'),
}