import commonjs from 'rollup-plugin-commonjs';
import babel from "rollup-plugin-babel";
import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    name: 'rolluptest',
    format: 'cjs'
  },
  external: ['react', 'styled-components'],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
};