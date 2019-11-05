import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import pkg from "./package.json";

const externals = ['@vkontakte/vkui'];
const plugins = [
	external({
		includeDependencies: true,
	}),
	babel({
		exclude: "node_modules/**",
	}),
	terser(),
];

export default [
	{
		input: 'src/NoConnectionModal',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: false,
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: false,
			}
		],
		external: externals,
		plugins,
	},
	{
		input: 'src/useConnection',
		output: [
			{
				file: 'lib/useConnection.js',
				format: 'cjs',
				sourcemap: false,
			},
			{
				file: 'lib/useConnection.es.js',
				format: 'es',
				sourcemap: false,
			}
		],
		external: externals,
		plugins,
	}
];
