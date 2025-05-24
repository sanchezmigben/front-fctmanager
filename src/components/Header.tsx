import Logo from './Logo'
import Nav from './Nav'
import SearchBar from './SearchBar'
import '@styles/header.css'

const Header = () => {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <Logo />
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header
