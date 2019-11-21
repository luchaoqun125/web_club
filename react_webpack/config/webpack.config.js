/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 17:15:01
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-21 14:18:52
 */
const pathConfig = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

const handler = (percentage, message, ...args) => {
  console.info(percentage, message, ...args);
};

function webpackConfig(options) {
  const isProduction = options.mode === 'production' ? true: false
  
  return {
    mode: options.mode,
    entry: {
      main: pathConfig.webpackEntry,
      vendor: [
        'react',
        'antd'
      ]
    },
    output: {
      filename: options.output.filename,
      path: pathConfig.dist,
    },
    plugins: [
      // html模板
      new HtmlWebpackPlugin({
        title: 'webpack配置react',
        template: pathConfig.publicIndex
      }),
      // 清除dist
      new CleanWebpackPlugin(),
      // 剥离css从js
      new ExtractTextPlugin({
        filename: "css/[name][hash].css"
      }),
      // 进程构建进度
      new webpack.ProgressPlugin(handler),
      // 热更新模块
      !isProduction && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: pathConfig.src,
          use: [
            {
              loader: "babel-loader",
              options: {
                  presets: ['@babel/preset-react'],
                  plugins: ["react-hot-loader/babel"]
              }
            }
          ]
        },
        {
          test: /\.(css|less)$/,
          include: pathConfig.src,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: {
                      mode: "local",
                      localIdentName: '[path][name]-[local]-[hash:base64:5]'
                  },
                  localsConvention: 'camelCase'
                }
              },
              'less-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: loader => {
                    require('postcss-import')({ root: loader.resourcePath }),
                    require('autoprefixer')()
                  }
                }
              }
            ]
          })
        },
        {
          test: /\.(css|less)$/,
          exclude: pathConfig.src,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          })
        },
        {
          test: /\.(jpg|png|jpeg|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024 * 10,
                name: 'images/[name]-[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        }
      ]
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 50000,
        minChunks: 1,
      },
    }
  }
}

module.exports = webpackConfig