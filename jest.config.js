const config = {
  collectCoverageFrom: ['**/*.{js,jsx}'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            decorators: false,
            dynamicImport: false,
            jsx: true,
            syntax: 'ecmascript',
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: [],
}

export default config
