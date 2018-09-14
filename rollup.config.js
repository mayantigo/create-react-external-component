import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/component.js',
    format: 'cjs',
  },
  external: [
    'react',
    'prop-types',
    'react-dom',
  ],
  plugins: [
    postcss({
      extract: true,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    commonjs(),
    uglify(),
  ],
};
