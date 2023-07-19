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
            optimizer: {
              globals: {
                vars: {
                  'import.meta.env.VITE_ALLOW_ORIGINS_URL':
                    "'https://api.allorigins.win/get?url='",
                  'import.meta.env.VITE_API_URL': "'https://itunes.apple.com'",
                },
              },
            },
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
