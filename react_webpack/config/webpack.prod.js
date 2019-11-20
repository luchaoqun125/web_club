/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-17 18:03:06
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 10:00:52
 */
const webpackConfig = require('./webpack.config')
const webpackMerge = require('webpack-merge')
const optimizeCss = require('optimize-css-assets-webpack-plugin')
var ManifestPlugin = require('webpack-manifest-plugin');

const prodConfig = {
  plugins: [
    new optimizeCss({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }),
    new ManifestPlugin(),
  ],
  devtool: "source-map",
}

const options = {
  mode: 'production',
  output: {
    filename: "js/[name][chunkhash].js",
  }
}

module.exports = webpackMerge(webpackConfig(options), prodConfig)