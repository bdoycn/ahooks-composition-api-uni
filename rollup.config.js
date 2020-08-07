import path from  'path'
import ts from 'rollup-plugin-typescript2'

const tsPlugin = ts({
  check: true,
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
  tsconfigOverride: {
    compilerOptions: {
      sourceMap: false,
      declaration: true,
      declarationMap: false,
    },
    exclude: ['**/__tests__', 'tests']
  }
})

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    tsPlugin
  ]
}
