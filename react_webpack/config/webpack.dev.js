/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:07:39
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 19:50:01
 */
const path = require('path')
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')

const devConfig = {
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // compress: true,
    // port: 9999,
  }
}

const options = {
  mode: 'development'
}

module.exports = webpackMerge(webpackConfig(options), devConfig)