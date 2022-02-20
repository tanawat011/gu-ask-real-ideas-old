console.log('\n')
console.log(`   ✅ PostCSS Config \n`)
console.log(`   ----------- \n`)

module.exports = {
  // plugins: [
  //   require('postcss-import'),
  //   require('tailwindcss'),
  //   require('autoprefixer'),
  //   require('postcss-preset-env'),
  // ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
}
