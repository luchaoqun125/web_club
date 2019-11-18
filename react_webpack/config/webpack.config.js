/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 17:15:01
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 22:50:31
 */
const path = require('path')
const pathConfig = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function webpackConfig(options) {
  return {
    mode: options.mode,
    entry: pathConfig.webpackEntry,
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack配置react',
        template: path.resolve(__dirname, "../public/index.html")
      }),
      new CleanWebpackPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "../src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                  presets: ['@babel/preset-react'],
                  plugins: ["react-hot-loader/babel"]
              }
            }
          ]
        }
      ]
    }
  }
}

module.exports = webpackConfig