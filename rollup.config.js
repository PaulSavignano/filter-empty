import pkg from './package.json'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const env = process.env.NODE_ENV

const override = {
  exclude: ['src/lib/__tests__'],
  include: ['src/lib'],
}

export default {
  input: 'src/lib/index.ts',
  output: {
    exports: 'auto',
    file: pkg.main,
    format: 'cjs',
  },
  plugins: [
    typescript({ clean: true, tsconfigOverride: override }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    terser(),
  ],
}
