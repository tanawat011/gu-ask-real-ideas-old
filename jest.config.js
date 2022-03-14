console.log('\n')
console.log(`   ✅ Jest Config \n`)
console.log(`   ----------- \n`)

const nextJest = require('next/jest')

const tsconfig = require('./tsconfig.json')
const paths = tsconfig.compilerOptions.paths

const aliasMapper = Object.keys(paths).reduce((acc, curr) => {
  const key = `${curr.replace('/*', '')}$`
  const value = `<rootDir>/src/${paths[curr]}`

  return {
    ...acc,
    [key]: value.replace('/*', ''),
  }
}, {})

delete aliasMapper['*$']

const moduleNameMapper = {
  ...aliasMapper,
  ...Object.keys(aliasMapper).reduce((acc, curr) => {
    const key = curr.replace('$', '/(.*)')
    const value = `${aliasMapper[curr]}/$1`

    return {
      ...acc,
      [key]: value,
    }
  }, {}),
}

const pathsIgnore = [
  '<rootDir>/.husky',
  '<rootDir>/.next',
  '<rootDir>/.storybook',
  '<rootDir>/coverage',
  '<rootDir>/cypress',
  '<rootDir>/documents',
  '<rootDir>/dist',
  '<rootDir>/node_modules',
  '<rootDir>/pages',
  '<rootDir>/src/configs',
  '<rootDir>/src/constants',
  '<rootDir>/src/locales',
  '<rootDir>/src/libs',
  '<rootDir>/jest.config.js',
  '<rootDir>/next.config.js',
  '<rootDir>/postcss.config.js',
  '<rootDir>/tailwind.config.js',
  'index.ts',
  'index.tsx',
]

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',

  clearMocks: true,
  verbose: false,
  collectCoverage: false,
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx,ts,tsx}',
  //   '!**/*.d.ts',
  //   '!**/*.spec.{js,jsx,ts,tsx}',
  //   '!**/*.stories.{js,jsx,ts,tsx}',
  //   '!**/node_modules/**',
  // ],
  moduleNameMapper,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: pathsIgnore,
  testPathIgnorePatterns: pathsIgnore,
  modulePathIgnorePatterns: pathsIgnore,
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
