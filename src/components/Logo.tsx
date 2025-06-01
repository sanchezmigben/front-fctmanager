import '@styles/logo.css'

function Logo() {
  const handleToggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar')
  }

  return (
    <div className='d-flex align-items-center justify-content-between'>
      <a href='/' className='logo d-flex align-items-center'>
        {/* Elemento img comentado por posible inclusión del logo del proyecto */}
        {/* <img src="" alt="" /> */}
        <span className='d-none d-lg-block'>AdminDashboardLogo2</span>
      </a>
      <i
        className='bi bi-list toggle-sidebar-btn'
        onClick={handleToggleSidebar}
      ></i>
    </div>
  )
}

export default Logo
