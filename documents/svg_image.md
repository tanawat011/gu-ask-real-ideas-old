# SVG IMAGE

## Install SVG IMAGE Webpack

```sh
yarn add -D @svgr/webpack \
  webpack
```

## next.config.js

```js
const nextConfig = {
  ...,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  ...,
}

module.exports = nextConfig
```
