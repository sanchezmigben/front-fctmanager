import './header.css'
import Logo from './Logo'
import Nav from './Nav'
import SearchBar from './SearchBar'

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
