import DarkTheme from './darkTheme'

// Import the global style enabling tailwind classes
import '../styles/globals.scss'

// or global addParameters
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: DarkTheme,
  },
}
