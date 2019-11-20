/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-20 14:06:02
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-11-20 17:47:59
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
// import { eslint } from 'rollup-plugin-eslint'
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'

export default [
	// {
	// 	input: 'src/main.js',
	// 	output: {
	// 		name: pkg.name,
	// 		file: pkg.browser,
	// 		format: 'umd'
	// 	},
	// 	plugins: [
	// 		resolve(), // so Rollup can find `ms`
	// 		commonjs() // so Rollup can convert `ms` to an ES module
	// 	]
	// },
	{
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
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
			babel({
				exclude: 'node_modules/**', // only transpile our source code
				runtimeHelpers: true,
			}),
			terser(),
			clear({
				targets: ['dist']
			})
		]
	}
];
