/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-19 14:25:57
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 14:04:36
 */
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json'
// import { eslint } from 'rollup-plugin-eslint';

export default {
    input: 'src/main.js',
    external: [
      'react',
    ],
    output: [{
      file: pkg.main,
      format: 'cjs',
      name: pkg.name
    }, {
      file: pkg.module,
      format: 'es',
      name: pkg.name
    }, {
      file: pkg.browser,
      format: 'umd',
      name: pkg.name
    }],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**'
      }),
      uglify(),
    ],
  }

