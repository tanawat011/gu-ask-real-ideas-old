# Stylelint

## Install Stylelint

```sh
yarn add -D stylelint \
  stylelint-config-prettier \
  stylelint-config-prettier-scss \
  stylelint-config-standard \
  stylelint-config-standard-scss \
  stylelint-scss
```

## .vscode/settings.json

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "scss"]
}
```

## Add Script on package.json

```json
{
  "scripts": {
    "lint:style": "yarn stylelint styles **/*.scss",
    "lint:style:fix": "yarn lint:style --fix"
  }
}
```

## .stylelintrc

```json
{
  "plugins": [
    "stylelint-scss"
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier-scss"
  ],
  "rules": {}
}
```
