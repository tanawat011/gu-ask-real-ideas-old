console.log('\n')
console.log(`   ✅ Stylelint Config \n`)
console.log(`   ----------- \n`)

const _plugins = [
  "stylelint-scss",
]

const _extends = [
  "stylelint-config-standard",
  "stylelint-config-prettier",
  "stylelint-config-standard-scss",
  "stylelint-config-prettier-scss",
]

const _rules = () => {
  const _ignoreAtRules = [
    "tailwind",
    "apply",
    "variants",
    "responsive",
    "screen",
  ]

  return {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: _ignoreAtRules,
      },
    ],
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: _ignoreAtRules,
      },
    ],
    "declaration-block-trailing-semicolon": "always",
    "declaration-block-semicolon-newline-after": "always",
    "block-closing-brace-empty-line-before": "never",
    "no-descending-specificity": null,
    "indentation": 2,
  }
}

module.exports = {
  plugins: _plugins,
  extends: _extends,
  rules: _rules(),
}
