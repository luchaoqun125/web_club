/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 17:15:01
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-19 10:22:53
 */
const pathConfig = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function webpackConfig(options) {
  return {
    mode: options.mode,
    entry: pathConfig.webpackEntry,
    output: {
      filename: 'js/bundle.js',
      path: pathConfig.dist,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack配置react',
        template: pathConfig.publicIndex
      }),
      new CleanWebpackPlugin(),
      new ExtractTextPlugin({
        filename: "css/[name][hash].css"
      }),
    ],
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
                      localIdentName: '[path][name]_[local]_[hash:base64:5]'
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
          test: /\.css$/,
          exclude: pathConfig.src,
          use: [
            // {
            //   loader: 'style-loader/url',
            // },
            {
              loader: 'file-loader',
              options: {
                name: 'css/[name].css'
              }
            }
          ]
        },
        {
          test: /\.(jpg|png|jpeg|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024 * 10,
                name: 'images/[name]_[hash].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        }
      ]
    }
  }
}

module.exports = webpackConfig