import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const env = process.env.NODE_ENV;

const makeExternalPredicate = (externalArr) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id) => pattern.test(id);
};

const override = {
  exclude: ['src/lib/__tests__'],
  include: ['src/lib'],
};

export default {
  external: makeExternalPredicate([
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ]),
  input: 'src/lib/index.ts',
  output: {
    exports: 'named',
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    typescript({ clean: true, tsconfigOverride: override }),
    replace({ 'process.env.NODE_ENV': JSON.stringify(env) }),
    terser(),
  ],
};
