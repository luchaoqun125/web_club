/*
 * @Description: 
 * @Author: 鲁大师
 * @Date: 2019-11-20 14:06:02
 * @LastEditors: 鲁大师
 * @LastEditTime: 2019-12-10 18:25:03
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'
import clear from 'rollup-plugin-clear'
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

export default {
	input: 'src/main.js',
	external: ['lz-string'],
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
		babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
		}),
		commonjs({
      namedExports: {
        'lz-string': ['LZString']
      }
    }),
		terser(),
		webWorkerLoader(),
		clear({
			targets: ['dist']
		}),
	]
}

