# TailwindCSS

## Install TailwindCSS

```sh
yarn add -D sass \
  tailwindcss \
  postcss \
  postcss-loader \
  sass-loader \
  autoprefixer
```

### postcss.config.js

```js
console.log('\n')
console.log(`   ✅ PostCSS Config \n`)
console.log(`   ----------- \n`)

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
    },
  },
}
```

### tailwind.config.js

```js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

console.log('\n')
console.log(`   ✅ TailwindCSS Config \n`)
console.log(`   ----------- \n`)

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [],
  darkMode: 'media', // or 'media' or 'class'
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
  variants: {
    accessibility: ['responsive', 'focus-within', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    animation: ['responsive'],
    appearance: ['responsive'],
    backdropBlur: ['responsive'],
    backdropBrightness: ['responsive'],
    backdropContrast: ['responsive'],
    backdropFilter: ['responsive'],
    backdropGrayscale: ['responsive'],
    backdropHueRotate: ['responsive'],
    backdropInvert: ['responsive'],
    backdropOpacity: ['responsive'],
    backdropSaturate: ['responsive'],
    backdropSepia: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundBlendMode: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    backgroundImage: ['responsive'],
    backgroundOpacity: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    backgroundOrigin: ['responsive'],
    blur: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    borderOpacity: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxDecorationBreak: ['responsive'],
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    boxSizing: ['responsive'],
    brightness: ['responsive'],
    clear: ['responsive'],
    container: ['responsive'],
    contrast: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive', 'dark'],
    divideOpacity: ['responsive', 'dark'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    dropShadow: ['responsive'],
    fill: ['responsive'],
    filter: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontWeight: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    grayscale: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridColumnStart: ['responsive'],
    gridRow: ['responsive'],
    gridRowEnd: ['responsive'],
    gridRowStart: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridTemplateRows: ['responsive'],
    height: ['responsive'],
    hueRotate: ['responsive'],
    inset: ['responsive'],
    invert: ['responsive'],
    isolation: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    mixBlendMode: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus-within', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'dark', 'focus'],
    placeholderOpacity: ['responsive', 'dark', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'dark', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    saturate: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    sepia: ['responsive'],
    skew: ['responsive', 'hover', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    textDecoration: [
      'responsive',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    textOpacity: [
      'responsive',
      'dark',
      'group-hover',
      'focus-within',
      'hover',
      'focus',
    ],
    textOverflow: ['responsive'],
    textTransform: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    transitionDelay: ['responsive'],
    transitionDuration: ['responsive'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    translate: ['responsive', 'hover', 'focus'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive', 'focus-within', 'focus'],
  },
  plugins: [],
}

```
