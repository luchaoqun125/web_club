/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:03:06
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-18 20:56:41
 */
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')
const optimizeCss = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
  plugins: [
    new optimizeCss({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }),
  ],
}

const options = {
  mode: 'production'
}

module.exports = webpackMerge(webpackConfig(options), prodConfig)