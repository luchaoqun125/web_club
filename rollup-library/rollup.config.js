/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-20 14:06:02
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-21 14:11:52
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
// import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'

export default {
	input: 'src/main.js',
	external: ['ms'],
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
		{
			name: pkg.name,
			file: pkg.browser,
			format: 'umd',
		}
	],
	// 是否开启代码分割
	experimentalCodeSplitting: true,
	plugins: [
		resolve(),
		commonjs(),
		babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      presets: [
				require('@babel/preset-env'), 
				require('@babel/preset-react')
			],
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
        "@babel/plugin-transform-regenerator",
        [
          "@babel/plugin-transform-runtime",
          {
            "absoluteRuntime": false,
            "corejs": false,
            "helpers": false,
            "regenerator": true,
            "useESModules": false
          }
        ]
      ]
    }),
		terser(),
		clear({
			targets: ['dist']
		}),
	]
}

