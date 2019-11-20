/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:07:39
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 09:50:07
 */
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')
const pathsConfig = require('./paths')

const devConfig = {
  devServer: {
    contentBase: pathsConfig.dist,
    hot: true
    // compress: true,
    // port: 9999,
  },
  devtool: 'inline-source-map',
}

const options = {
  mode: 'development',
  output: {
    filename: "js/[name][hash].js",
  },
}

module.exports = webpackMerge(webpackConfig(options), devConfig)