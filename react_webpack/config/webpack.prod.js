/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:03:06
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 18:06:16
 */
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')

const prodConfig = {

}

const options = {
  mode: 'production'
}

module.exports = webpackMerge(webpackConfig(options), prodConfig)