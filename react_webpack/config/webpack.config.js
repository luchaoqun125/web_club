/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-16 17:15:01
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 10:02:47
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
  return {
    mode: options.mode,
    entry: pathConfig.webpackEntry,
    output: {
      filename: options.output.filename,
      path: pathConfig.dist,
      publicPath: "/"
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
      new webpack.ProgressPlugin(handler)
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
      }
    }
  }
}

module.exports = webpackConfig