module.exports = {
  root: true,

  'extends': [
    '@mengjing/eslint-config/vue',
    '@vue/typescript'
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
}
