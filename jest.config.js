module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  setupFiles: [
    '<rootDir>/tests/unit/setupTest.ts'
  ],
  transformIgnorePatterns: [
    "/!node_modules\\/lodash-es/"
  ],
}
