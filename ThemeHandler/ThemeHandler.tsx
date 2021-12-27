import { useEffect } from 'react'
import usePrefersDarkMode from './usePrefersDarkMode'

function ThemeHandler() {
  const prefersDark = usePrefersDarkMode()

  useEffect(() => {
    const button = document?.querySelector('button[aria-label*="Switch to "]')

    const listener = () => { 
      localStorage.setItem('manually-set-color-pref', 'true')
      button?.removeEventListener('click', listener)
    }

    button?.addEventListener('click', listener)

    return () => button?.removeEventListener('click', listener)
  }, [])

  useEffect(() => {
    const manuallySet = localStorage?.['manually-set-color-pref']
    const themeUiColorMode = localStorage?.['theme-ui-color-mode']
    const preferredMode = prefersDark ? 'dark' : 'light'
    if (localStorage && !manuallySet && themeUiColorMode !== preferredMode) {
      localStorage.setItem('theme-ui-color-mode', preferredMode);
      location?.reload()
    }
  }, [prefersDark])

  return null;
}

export default ThemeHandler