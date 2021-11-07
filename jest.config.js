const pathsIgnore = [
  '<rootDir>/.next',
  '<rootDir>/.storybook',
  '<rootDir>/coverage',
  '<rootDir>/dist',
  '<rootDir>/node_modules/',
  '<rootDir>/pages/',
  '<rootDir>/src/configs',
  '<rootDir>/src/constants',
  '<rootDir>/src/locales',
  '<rootDir>/src/libs',
  '<rootDir>/jest.config.js',
  '<rootDir>/next.config.js',
  '<rootDir>/postcss.config.js',
  '<rootDir>/tailwind.config.js',
]

module.exports = {
  clearMocks: true,
  verbose: false,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/*.spec.{js,jsx,ts,tsx}',
    '!**/*.stories.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: pathsIgnore,
  testPathIgnorePatterns: pathsIgnore,
  modulePathIgnorePatterns: pathsIgnore,
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
