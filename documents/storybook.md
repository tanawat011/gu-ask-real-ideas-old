# Storybook

## Install Storybook

```sh
yarn add -D @storybook/react @storybook/addon-actions @storybook/addon-essentials @storybook/addon-links @storybook/addon-postcss @storybook/builder-webpack5 @storybook/manager-webpack5 file-loader
```

## Add Script on package.json

```json
{
  ...,
  "scripts": {
    ...,
    "storybook": "start-storybook -p 6006 -s public",
    "storybook:build": "build-storybook",
    ...
  },
  ...
}
```

## .storybook/main.js

```js
console.log('\n')
console.log(`   ✅ Storybook Config \n`)
console.log(`   ----------- \n`)

const path = require('path')
const toPath = (_path) => path.join(process.cwd(), _path)

const tsconfig = require('../tsconfig.json')
const tspaths = tsconfig.compilerOptions.paths

const aliasMapper = Object.keys(tspaths).reduce((acc, curr) => ({
  ...acc,
  [curr.replace('/*', '')]: toPath(`src/${tspaths[curr]}`).replace('/*', ''),
}), {})

delete aliasMapper['*$']
delete aliasMapper['@icon$']

module.exports = {
  'stories': ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    })

    // SVG
    // Needed for SVG importing using svgr
    const indexOfRuleToRemove = config.module.rules.findIndex((rule) =>
      rule.test?.toString().includes("svg")
    )

    config.module.rules.splice(indexOfRuleToRemove, 1, {
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      loader: require.resolve("file-loader"),
      options: {
        name: "static/media/[name].[hash:8].[ext]",
        esModule: false
      }
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false
          }
        }
      ]
    })

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...aliasMapper,
          '@icon': toPath('src/assets/icons'),
        }
      }
    }
  },
}
```

## .storybook/preview.js

```js
// Import the global style enabling tailwind classes
import '../styles/globals.scss'

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
```
