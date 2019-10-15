import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV

export default {
  input: 'src/lib/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  external: [
    'react',
    'react-proptypes'
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
    }),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    nodeResolve(),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    commonjs(),
    uglify()
  ]
};