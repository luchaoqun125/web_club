/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 16:49:26
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 18:10:05
 */
const webpack = require('webpack')
const webpackProd = require('../config/webpack.prod')

const compiler = webpack(webpackProd)

compiler.run((err, stats) => {
  if(err || stats.hasErrors()) {
    console.log('编译失败')
  }
});
