# ESLint

## Install ESLint

```sh
yarn add -D eslint \
  eslint-config-next \
  eslint-config-prettier \
  eslint-plugin-jest \
  eslint-plugin-json \
  eslint-plugin-prettier \
  eslint-plugin-react \
  @typescript-eslint/eslint-plugin
```

## Add Script on package.json

```json
{
  "scripts": {
    "lint:ts": "eslint **/*.{ts,tsx}",
    "lint:ts:fix": "yarn lint:ts --fix"
  }
}
```

## .eslintrc

```json
{
  "plugins": [
    "@typescript-eslint",
    "json",
    "jest",
    "prettier",
    "react"
  ],
  "extends": [
    "plugin:prettier/recommended",
    "plugin:json/recommended",
    "plugin:jest/all",
    "plugin:react/recommended",
    "next/core-web-vitals", 
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended", 
    "prettier"
  ],
  "rules": {}
}
```

## .vscode/settings.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // Tell VSCode to auto fix our code with eslint
  },
  "editor.formatOnSave": true, // Tell VSCode to format files on save
}
```
