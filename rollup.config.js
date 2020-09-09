import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const env = process.env.NODE_ENV

export default {
  input: 'src/lib/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [typescript(), replace({ 'process.env.NODE_ENV': JSON.stringify(env) }), terser()],
}
