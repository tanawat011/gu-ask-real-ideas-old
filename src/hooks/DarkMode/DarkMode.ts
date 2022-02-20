import { Dispatch, useEffect, useState } from 'react'

export const useDarkMode = (): [string, Dispatch<string>] => {
  const isWindowUndefined = typeof window !== 'undefined'

  const [theme, setTheme] = useState<string>(
    isWindowUndefined ? (localStorage.theme as string) : 'dark',
  )
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove(colorTheme)
    root.classList.add(theme)

    if (isWindowUndefined) {
      localStorage.setItem('theme', theme)
    }
  }, [colorTheme, isWindowUndefined, theme])

  return [colorTheme, setTheme]
}
