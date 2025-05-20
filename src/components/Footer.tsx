import './footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='copyright'>
        &copy; Copyright{' '}
        <strong>
          <span>Jerogassan</span>
        </strong>
        . All Rights Reserved
      </div>

      <div className='credits'>
        Designed by{' '}
        <a
          href='https://github.com/hitses'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jerogassan
        </a>
      </div>
    </footer>
  )
}

export default Footer
