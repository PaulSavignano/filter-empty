module.exports = {
  collectCoverageFrom: ['src/lib/*.ts', '!src/*.ts', '!src/examples/*.tsx'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  preset: 'ts-jest',
  rootDir: 'src',
  testEnvironment: 'node',
}
å
