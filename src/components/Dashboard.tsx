import { useEffect, useState } from 'react'
import './dashboard.css'
import Card from './Card'
import Reports from './Reports'
import RecentSales from './RecentSales'
import TopSelling from './TopSelling'
import RecentActivity from './RecentActivity'

interface ICard {
  _id: number
  name: string
  icon: string
  amount: number
  percentage: number
  active: boolean
}

function Dashboard() {
  const [cards, setCards] = useState<ICard[]>([])

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/cards')
      const data = await res.json()
      setCards(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className='dashboard section'>
      <div className='row'>
        <div className='col-lg-8'>
          <div className='row'>
            {cards &&
              cards.length > 0 &&
              cards.map((card: ICard) => <Card key={card._id} {...card} />)}

            <div className='col-12'>
              <Reports />
            </div>

            <div className='col-12'>
              <RecentSales />
            </div>

            <div className='col-12'>
              <TopSelling />
            </div>
          </div>
        </div>
        <div className='col-lg-4'>
          <RecentActivity />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
