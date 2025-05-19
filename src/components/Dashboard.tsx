import { useEffect, useState } from 'react'
import './dashboard.css'
import Card from './Card'

interface Card {
  _id: number
  name: string
  icon: string
  amount: number
  percentage: number
  active: boolean
}

function Dashboard() {
  const [cards, setCards] = useState<Card[]>([])

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
              cards.map((card: Card) => <Card key={card._id} {...card} />)}
          </div>
        </div>
        <div className='col-lg-4'></div>
      </div>
    </section>
  )
}

export default Dashboard
