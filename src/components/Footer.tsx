import '@styles/footer.css'

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='copyright'>
        &copy; Copyright{' '}
        <strong>
          <span>Migben</span>
        </strong>
        . All Rights Reserved
      </div>

      {/* Créditos adicionales a DStudio */}
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
