/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 16:49:11
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-17 21:57:05
 */
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackDevConfig = require('../config/webpack.dev')

const compiler = webpack(webpackDevConfig)
const options = Object.assign({}, webpackDevConfig.devServer, {
  open: true
})

const server = new webpackDevServer(compiler, options)
server.listen(3000, 'localhost', () => {
  console.log('启动完成，3000')
})