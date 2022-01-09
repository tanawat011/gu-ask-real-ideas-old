const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const purgeEnabled = process.env.NODE_ENV === 'production'

console.log('\n')
console.log(`   TailwindCSS \n`)
console.log(`   ----------- \n`)
console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

module.exports = {
  mode: 'jit',
  purge: {
    enabled: purgeEnabled,
    mode: 'all',
    content: [
      './src/**/*.html',
      './src/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
    ],
  },
  presets: [],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    boxSizing: false,
  },
  theme: {
    ...defaultTheme,
    extend: {
      colors: {
        ...colors,
        primary: {
          disabled: '#bee3f8',
          hover: '#63b3ed',
          default: '#4299e1',
          pressed: '#3182ce',
        },
        secondary: {
          disabled: '#e2e8f0',
          hover: '#cbd5e0',
          default: '#a0aec0',
          pressed: '#718096',
        },
        warning: {
          disabled: '#faf089',
          hover: '#f6e05e',
          default: '#ecc94b',
          pressed: '#d69e2e',
        },
        danger: {
          disabled: '#feb2b2',
          hover: '#fc8181',
          default: '#f56565',
          pressed: '#e53e3e',
        },
        info: {
          disabled: '#81e6d9',
          hover: '#4fd1c5',
          default: '#38b2ac',
          pressed: '#319795',
        },
        success: {
          disabled: '#9ae6b4',
          hover: '#68d391',
          default: '#48bb78',
          pressed: '#38a169',
        },
      },
      transitionProperty: {
        ...defaultTheme.transitionProperty,
        width: 'width',
        height: 'height',
      },
    },
  },
  variants: {},
  plugins: [],
}
