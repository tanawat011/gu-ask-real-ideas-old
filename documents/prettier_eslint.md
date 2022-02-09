# Prettier and ESLint

## Install Prettier and ESLint

```sh
yarn add -D eslint prettier eslint-config-next eslint-config-prettier "@typescript-eslint/eslint-plugin
```

## Add Script on package.json

```json
{
  ...,
  "scripts": {
    ...,
    
    ...
  },
  ...
}
```

## .eslintrc

```json
{
  "plugins": ["@typescript-eslint"],
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended", "prettier"],
  "rules": {
    "prefer-const": "error"
  }
}
```

## .prettierrc

```json
{
  "semi": false,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 80,
  "bracketSpacing": true,
  "arrowParens": "always",
  "tabWidth": 2,
  "jsxSingleQuote": true,
  "bracketSameLine": false,
  "parser": "typescript",
  "endOfLine": "auto"
}
```

## .vscode/settings.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add those two lines:
  "editor.formatOnSave": true, // Tell VSCode to format files on save
  "editor.defaultFormatter": "esbenp.prettier-vscode", // Tell VSCode to use Prettier as default file formatter
  "cSpell.words": [],
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
