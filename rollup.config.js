import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'prop-types',
    'react-dom'
  ],
  plugins: [
    postcss({
      plugins: []
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    commonjs(),
  ]
}
