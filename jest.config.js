const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig.json')

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDit>/src/modules/**/service/*.ts"
  ],
  coverageDirectory:"coverage",
  coverageReporters: [
    "text-summary",
    "lcov",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths,{prefix:"<rootDir>/src/"}),
  preset: 'ts-jest',
  testMatch: [
   "**/*.spec.ts"
  ]
};
