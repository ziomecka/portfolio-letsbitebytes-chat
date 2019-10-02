module.exports = {
  rootDir: '.',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  setupFilesAfterEnv: ['./test.setup.js'],
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).js',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/deploy/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/',
    '<rootDir>/deploy/',
  ],
};
