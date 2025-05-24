import Dashboard from './Dashboard'
import PageTitle from './PageTitle'
import '@styles/main.css'

function Main() {
  return (
    <main id='main' className='main'>
      <PageTitle page='Dashboard' />
      <Dashboard />
    </main>
  )
}

export default Main
