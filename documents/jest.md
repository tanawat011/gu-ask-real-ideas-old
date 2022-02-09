# Jest

## Install Jest

```sh
yarn add -D jest @testing-library/react @testing-library/jest-dom
```

## Add Script on package.json

```json
{
  ...,
  "scripts": {
    ...,
    "test": "jest -w 1",
    "test:u": "jest -w 1 -u",
    "test:cv": "yarn test --coverage",
    "test:cv:msg": "yarn test:cv --verbose",
    "test:cv:w": "yarn test:cv --watchAll",
    "test:cv:msg:w": "yarn test:cv:msg --watchAll",
    ...
  },
  ...
}
```

## jest.config.js

```js
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
delete aliasMapper['@icon$']

console.log(aliasMapper)

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

  moduleNameMapper,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```
