# Husky

## Install Husky

```sh
yarn add -D husky
```

## Add Script on package.json

```json
{
  "scripts": {
    "prepare": "husky install",
    "solve:pre:commit:not-exec": "chmod ug+x .husky/*",
    "pre:commit": "yarn lint && yarn build",
    "pre:push": "yarn test:cv:msg"
  }
}
```

## CLI Add Hook

```sh
yarn husky add .husky/pre-commit "yarn pre:commit"
```
