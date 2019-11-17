/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:26:35
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 19:03:38
 */
const path = require('path')

const resolvePath = (pathUrl) => {
  return path.resolve(__dirname, pathUrl)
}

module.exports = {
  webpackEntry: resolvePath('../src/index')
}