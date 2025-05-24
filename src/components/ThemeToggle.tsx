import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    const theme =
      savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'

    document.documentElement.setAttribute('data-bs-theme', theme)
    setIsDark(theme === 'dark')
  }, [])

  const toggleTheme = () => {
    const currentTheme =
      document.documentElement.getAttribute('data-bs-theme') || 'light'
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'

    setIsDark(newTheme === 'dark')
    document.documentElement.setAttribute('data-bs-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <li className='nav-item'>
      <a
        className='nav-link nav-icon nav-icon-toggle'
        onClick={toggleTheme}
        aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      >
        <i className={`bi ${isDark ? 'bi-sun' : 'bi-moon-stars'}`}></i>
      </a>
    </li>
  )
}

export default ThemeToggle
