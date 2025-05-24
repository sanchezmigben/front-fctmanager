import NavAvatar from './NavAvatar'
import NavMessage from './NavMessage'
import NavNotice from './NavNotice'
import ThemeToggle from './ThemeToggle'
import '@styles/nav.css'

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
      <ul className='d-flex align-items-center'>
        <ThemeToggle />
        <NavNotice />
        <NavMessage />
        <NavAvatar />
      </ul>
    </nav>
  )
}

export default Nav
