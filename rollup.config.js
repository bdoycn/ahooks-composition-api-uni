import ts from 'rollup-plugin-typescript2'

const tsPlugin = ts({
  typescript: require('ttypescript'),
  check: false,
  tsconfigOverride: {
    compilerOptions: {
      sourceMap: false,
      declaration: true,
      declarationMap: false,
      plugins: [
        { "transform": "typescript-transform-paths" },
        { "transform": "typescript-transform-paths", "afterDeclarations": true }
      ],
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
